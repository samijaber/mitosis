import { collectCss } from './collect-css';
import { parseJsx } from '../../parsers/jsx';

import classRaw from '../../__tests__/data/styles/class.raw?raw';
import classState from '../../__tests__/data/styles/classState.raw?raw';

describe('Styles', () => {
  test('class property and CSS are merged', () => {
    const component = parseJsx(classRaw);
    const output = collectCss(component);
    expect({ component, output }).toMatchSnapshot();
  });
  test('class binding and CSS are merged', () => {
    const component = parseJsx(classState);
    const output = collectCss(component);
    expect({ component, output }).toMatchSnapshot();
  });
});
