import { Transpiler } from '../types/transpiler';
import { Target } from '../types/config';
import { parseJsx } from '../parsers/jsx';

import defaultValsWithTypes from './data/types/component-with-default-values-types.raw?raw';
import rootShow from './data/blocks/rootShow.raw?raw';
import nestedShow from './data/show/nested-show.raw?raw';
import showWithFor from './data/show/show-with-for.raw?raw';
import AdvancedRef from './data/advanced-ref.raw?raw';
import basicOnUpdateReturn from './data/basic-onUpdate-return.raw?raw';
import basicForShow from './data/basic-for-show.raw?raw';
import basicOnMountUpdate from './data/basic-onMount-update.raw?raw';
import basicContext from './data/basic-context.raw?raw';
import basicOutputsMeta from './data/basic-outputs-meta.raw?raw';
import basicOutputs from './data/basic-outputs.raw?raw';
import subComponent from './data/sub-component.lite.jsx?raw';

import basic from './data/basic.raw?raw';
import basicMitosis from './data/basic-custom-mitosis-package.raw?raw';
import basicChildComponent from './data/basic-child-component.raw?raw';
import basicFor from './data/basic-for.raw?raw';
import basicRef from './data/basic-ref.raw?raw';
import basicForwardRef from './data/basic-forwardRef.raw?raw';
import basicForwardRefMetadata from './data/basic-forwardRef-metadata.raw?raw';
import basicRefPrevious from './data/basic-ref-usePrevious.raw?raw';
import basicRefAssignment from './data/basic-ref-assignment.raw?raw';
import propsDestructure from './data/basic-props-destructure.raw?raw';
import nestedStyles from './data/nested-styles.lite?raw';
import preserveExportOrLocalStatement from './data/basic-preserve-export-or-local-statement.raw?raw';

import propsType from './data/types/component-props-type.raw?raw';
import propsInterface from './data/types/component-props-interface.raw?raw';
import preserveTyping from './data/types/preserve-typing.raw?raw';
import typeDependency from './data/types/type-dependency.raw?raw';

import defaultProps from './data/default-props/default-props.raw?raw';

import classRaw from './data/styles/class.raw?raw';
import className from './data/styles/className.raw?raw';
import classAndClassName from './data/styles/class-and-className.raw?raw';
import classState from './data/styles/classState.raw?raw';

import button from './data/blocks/button.raw?raw';
import classNameJsx from './data/blocks/classname-jsx.raw?raw';
import columns from './data/blocks/columns.raw?raw';
import contentSlotHtml from './data/blocks/content-slot-html.raw?raw';
import contentSlotJsx from './data/blocks/content-slot-jsx.raw?raw';
import customCode from './data/blocks/custom-code.raw?raw';
import formBlock from './data/blocks/form.raw?raw';
import image from './data/blocks/image.raw?raw';
import imageState from './data/blocks/img-state.raw?raw';
import img from './data/blocks/img.raw?raw';
import inputBlock from './data/blocks/input.raw?raw';
import multipleOnUpdate from './data/blocks/multiple-onUpdate.raw?raw';
import multipleOnUpdateWithDeps from './data/blocks/multiple-onUpdateWithDeps.raw?raw';
import onInit from './data/blocks/onInit.raw?raw';
import onInitonMount from './data/blocks/onInit-onMount.raw?raw';
import onMount from './data/blocks/onMount.raw?raw';
import onUpdate from './data/blocks/onUpdate.raw?raw';
import onUpdateWithDeps from './data/blocks/onUpdateWithDeps.raw?raw';
import rawText from './data/blocks/raw-text.raw?raw';
import section from './data/blocks/section.raw?raw';
import sectionState from './data/blocks/section-state.raw?raw';
import selectBlock from './data/blocks/select.raw?raw';
import selfRefCompWChildren from './data/blocks/self-referencing-component-with-children.raw?raw';
import selfRefComp from './data/blocks/self-referencing-component.raw?raw';
import slotHtml from './data/blocks/slot-html.raw?raw';
import slotJsx from './data/blocks/slot-jsx.raw?raw';
import stamped from './data/blocks/stamped-io.raw?raw';
import submitButtonBlock from './data/blocks/submit-button.raw?raw';
import text from './data/blocks/text.raw?raw';
import textarea from './data/blocks/textarea.raw?raw';
import video from './data/blocks/video.raw?raw';

const path = 'test-path';

type Tests = { [index: string]: any };

const BASIC_TESTS = {
  Basic: basic,
  BasicRef: basicRef,
  BasicRefPrevious: basicRefPrevious,
  BasicRefAssignment: basicRefAssignment,
  BasicChildComponent: basicChildComponent,
  BasicFor: basicFor,
  Input: inputBlock,
  Submit: submitButtonBlock,
  Select: selectBlock,
  Button: button,
  Textarea: textarea,
  Img: img,
  Video: video,
  Section: section,
  Text: text,
  RawText: rawText,
  'Stamped.io': stamped,
  CustomCode: customCode,
  Embed: customCode,
  Image: image,
  Columns: columns,
  onUpdate: onUpdate,
  onInit: onInit,
  onUpdateWithDeps: onUpdateWithDeps,
  onMount: onMount,
  propsType: propsType,
  propsInterface: propsInterface,
  defaultProps: defaultProps,
  preserveTyping: preserveTyping,
  typeDependency,
  defaultValsWithTypes,
  subComponent,
  nestedStyles,
  propsDestructure: propsDestructure,
  'onInit & onMount': onInitonMount,
  'Basic Context': basicContext,
  'Basic Outputs Meta': basicOutputsMeta,
  'Basic Outputs': basicOutputs,
  className: classNameJsx,
  'Image State': imageState,
  'Basic OnMount Update': basicOnMountUpdate,
  preserveExportOrLocalStatement,
  'class + css': classRaw,
  'className + css': className,
  'class + ClassName + css': classAndClassName,
  'self-referencing component with children': selfRefCompWChildren,
  'self-referencing component': selfRefComp,
};

const SLOTS_TESTS = {
  ContentSlotJSX: contentSlotJsx,
  ContentSlotHtml: contentSlotHtml,
  SlotJsx: slotJsx,
  SlotHtml: slotHtml,
  classState,
};

const MULTI_ON_UPDATE_TESTS: Tests = {
  multipleOnUpdate: multipleOnUpdate,
  multipleOnUpdateWithDeps: multipleOnUpdateWithDeps,
};

const FORM_BLOCK_TESTS: Tests = {
  Form: formBlock,
};

const FOR_SHOW_TESTS: Tests = {
  Section: sectionState,
  Basic: basicForShow,
};

const FORWARD_REF_TESTS: Tests = {
  basicForwardRef,
  basicForwardRefMetadata,
};

const SHOW_TESTS: Tests = {
  rootShow,
  nestedShow,
  showWithFor,
};

const ADVANCED_REF: Tests = {
  AdvancedRef,
};

const ON_UPDATE_RETURN: Tests = {
  basicOnUpdateReturn,
};

const TESTS_FOR_TARGET: Partial<Record<Target, Tests[]>> = {
  react: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
    // FOR_SHOW_TESTS,
  ],
  angular: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    FOR_SHOW_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
  ],
  lit: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    FOR_SHOW_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
  ],
  marko: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    FOR_SHOW_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
  ],
  webcomponent: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FOR_SHOW_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
    // FORM_BLOCK_TESTS
  ],
  vue: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    FOR_SHOW_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
  ],
  svelte: [
    BASIC_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    FOR_SHOW_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
  ],
  html: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FOR_SHOW_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
    // FORM_BLOCK_TESTS
  ],
  stencil: [
    BASIC_TESTS,
    SLOTS_TESTS,
    // ROOT_SHOW_TESTS,
    FORWARD_REF_TESTS,
    // MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
    // FOR_SHOW_TESTS
  ],
  solid: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    // FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    FOR_SHOW_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
  ],
  reactNative: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
    // FOR_SHOW_TESTS,
  ],
  liquid: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    ADVANCED_REF,
    ON_UPDATE_RETURN,
  ],
  qwik: [
    BASIC_TESTS,
    SLOTS_TESTS,
    SHOW_TESTS,
    FORWARD_REF_TESTS,
    MULTI_ON_UPDATE_TESTS,
    FORM_BLOCK_TESTS,
    FOR_SHOW_TESTS,
  ],
};

export const runTestsForTarget = (target: Target, generator: Transpiler) => {
  const testsArray = TESTS_FOR_TARGET[target];

  test('Remove Internal mitosis package', () => {
    const component = parseJsx(basicMitosis, {
      compileAwayPackages: ['@dummy/custom-mitosis'],
    });
    const output = generator({ component, path });
    expect(output).toMatchSnapshot();
  });

  if (testsArray) {
    testsArray.forEach((tests) => {
      Object.keys(tests).forEach((key) => {
        test(key, () => {
          const component = parseJsx(tests[key]);
          const output = generator({ component, path });
          expect(output).toMatchSnapshot();
        });
      });
    });
  }
};
