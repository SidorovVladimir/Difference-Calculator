import _ from 'lodash';

const spacesCount = 4;
const replacer = ' ';

const getIndent = (depth) => {
  const indentSize = depth * spacesCount;
  return replacer.repeat(indentSize - 2);
};

const stringify = (data, depth) => {
  if (!_.isPlainObject(data)) {
    return String(data);
  }
  const lines = Object.entries(data).map(
    ([key, value]) => `${getIndent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`,
  );
  return `{\n${lines.join('\n')}\n${getIndent(depth)}  }`;
};

const iter = (diff, depth = 1) => diff.map((node) => {
  switch (node.type) {
    case 'deleted':
      return `${getIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
    case 'added':
      return `${getIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
    case 'changed': {
      const line1 = `${getIndent(depth)}- ${node.key}: ${stringify(node.value1, depth)}`;
      const line2 = `${getIndent(depth)}+ ${node.key}: ${stringify(node.value2, depth)}`;
      return `${line1}\n${line2}`;
    }
    case 'unchanged':
      return `${getIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
    case 'nested': {
      const lines = iter(node.children, depth + 1);
      return `${getIndent(depth)}  ${node.key}: {\n${lines.join('\n')}\n${getIndent(depth)}  }`;
    }
    default:
      throw new Error(`Unknown type of node '${node.type}'.`);
  }
});

const formatStylish = (tree) => {
  const lines = iter(tree, 1);
  return `{\n${lines.join('\n')}\n}`;
};
export default formatStylish;
