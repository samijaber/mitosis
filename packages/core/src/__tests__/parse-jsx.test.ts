import { parseStateObjectToMitosisState } from '../parsers/jsx/state';
import { parseJsx } from '../parsers/jsx';
import { SPEC } from './data/jsx-json.spec';

import buttonWithMetadata from './data/blocks/button-with-metadata.raw?raw';
import image from './data/blocks/image.raw?raw';
import basicOnUpdateReturn from './data/basic-onUpdate-return.raw?raw';
import basicMitosis from './data/basic-custom-mitosis-package.raw?raw';
import basicRef from './data/basic-ref.raw?raw';
import basicPropsRaw from './data/basic-props.raw?raw';
import basicPropsDestructureRaw from './data/basic-props-destructure.raw?raw';

describe('Parse JSX', () => {
  test('parseStateObject', () => {
    const out = parseStateObjectToMitosisState(SPEC as any);
    expect(out).toMatchSnapshot();
  });
  test('metadata', () => {
    const json = parseJsx(buttonWithMetadata);
    expect(json).toMatchSnapshot();
  });

  test('Image', () => {
    const json = parseJsx(image);
    expect(json).toMatchSnapshot();
  });
  test('onUpdate return', () => {
    const json = parseJsx(basicOnUpdateReturn);
    expect(json).toMatchSnapshot();
  });

  test('useRef', () => {
    const json = parseJsx(basicRef);
    expect(json).toMatchSnapshot();
  });

  test('custom mitosis package', () => {
    const json = parseJsx(basicMitosis, {
      compileAwayPackages: ['@dummy/custom-mitosis'],
    });
    expect(json).toMatchSnapshot();
  });

  test('custom mitosis package', () => {
    expect(parseJsx(basicPropsRaw)).toEqual(parseJsx(basicPropsDestructureRaw));
  });
});
