import { types } from '@babel/core';
import { createMitosisNode, MitosisNode, Plugin } from '..';
import { babelTransformExpression } from './babel-transform';
import { traverseNodes } from './traverse-nodes';

const SLOT_PREFIX = 'slot';
export type SlotMapper = (slotName: string) => string;

export const isSlotProperty = (key: string, slotPrefix: string = SLOT_PREFIX): boolean => {
  if (key.startsWith(slotPrefix)) {
    const firstChar = key[slotPrefix.length];
    // matches `slotTesting`, but not `slottesting`
    return firstChar === firstChar.toUpperCase();
  }

  return false;
};

export const stripSlotPrefix = (key: string, slotPrefix: string = SLOT_PREFIX): string =>
  isSlotProperty(key, slotPrefix) ? key.substring(slotPrefix.length) : key;

export function replaceSlotsInString(code: string, mapper: SlotMapper) {
  return babelTransformExpression(code, {
    Identifier(path: babel.NodePath<babel.types.Identifier>) {
      const name = path.node.name;
      const isSlot = isSlotProperty(name);
      if (isSlot) {
        path.replaceWith(types.identifier(mapper(stripSlotPrefix(name).toLowerCase())));
      }
    },
  });
}

// this should run at the parser level. slot prop should immediately become a child node.
export const moveSlotsPlugin: Plugin = () => ({
  json: {
    pre: (json) => {
      traverseNodes(json, (node) => {
        Object.keys(node.bindings)
          .filter((key) => isSlotProperty(key))
          .forEach((key) => {
            const binding = node.bindings[key]!;
            const slotChild: MitosisNode = createMitosisNode({
              '@type': '@builder.io/mitosis/node',
              name: 'Slot',
              properties: {
                name: binding.code,
              },
              children: [],
            });
            node.children.push(slotChild);
            delete node.bindings[key];
          });
      });
      return json;
    },
  },
});
