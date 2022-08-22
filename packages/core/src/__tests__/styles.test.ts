import { parseJsx } from '../parsers/jsx';

import classRaw from './data/styles/class.raw?raw';
import className from './data/styles/className.raw?raw';
import classAndClassName from './data/styles/class-and-className.raw?raw';

describe('Styles', () => {
  test('class and className are equivalent', () => {
    expect(parseJsx(classRaw)).toEqual(parseJsx(className));
  });
  test('class and CSS are merged', () => {
    const component = parseJsx(classRaw);
    expect(component).toMatchSnapshot();
  });
  test('className and CSS are merged', () => {
    const component = parseJsx(className);
    expect(component).toMatchSnapshot();
  });
  test('class and className are merged', () => {
    const component = parseJsx(classAndClassName);
    expect(component).toMatchSnapshot();
  });
});
