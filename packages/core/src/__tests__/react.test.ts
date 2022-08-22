import { parseJsx } from '..';
import { componentToReact } from '../generators/react';
import { runTestsForTarget } from './shared';

describe('Preact', () => {
  runTestsForTarget('react', componentToReact({ preact: true }));
});

import stamped from './data/blocks/stamped-io.raw?raw';
describe('React', () => {
  runTestsForTarget('react', componentToReact());
  test('stamped', () => {
    const component = parseJsx(stamped);
    const output = componentToReact({
      stylesType: 'style-tag',
      stateType: 'useState',
    })({ component });
    expect(output).toMatchSnapshot();
  });
});
