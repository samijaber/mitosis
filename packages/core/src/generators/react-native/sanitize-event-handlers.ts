import { MitosisNode } from '../../types/mitosis-node';

/**
 * Replaces web event handlers with their React Native equivalents.
 */
export const sanitizeEventHandlers = (node: MitosisNode) => {
  if (!node.bindings) {
    return;
  }

  for (const key in node.bindings) {
    if (!key.startsWith('on')) {
      return;
    }

    const binding = node.bindings[key];

    switch (key) {
      case 'onClick':
        node.bindings.onPress = binding;
        delete node.bindings.onClick;
        break;
      // etc for all onMouse* events
      // For now, probably just remove them as they do nothing.
      case 'onMouseEnter':
      case 'onMouseLeave':
      case 'onMouseOver':
        delete node.bindings.onMouseEnter;
        break;
    }
  }
};
