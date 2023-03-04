import formatStylish from './stylish.js';

const formatter = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return formatStylish(tree);
    default:
      throw new Error(`'unknown formatter! ${formatName}'`);
  }
};
export default formatter;
