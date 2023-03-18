import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const formatter = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return formatStylish(tree);
    case 'plain':
      return formatPlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`'unknown formatter! ${formatName}'`);
  }
};
export default formatter;
