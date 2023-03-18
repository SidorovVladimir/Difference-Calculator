import _ from 'lodash';

const spacesCount = 4;
const replacer = ' ';

const getIndent = (depth) => {
  const indentSize = depth * spacesCount;
  return replacer.repeat(indentSize - 2);
};

const stringify = (data, depth) => {
  if (!_.isPlainObject(data)) {
    return `${data}`;
  }
  const lines = Object.entries(data).map(
    ([key, value]) => `${getIndent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`,
  );
  return ['{', ...lines, `${getIndent(depth)}  }`].join('\n');
};

const iter = (diff, depth = 1) => diff.map((node) => {
  switch (node.type) {
    case 'deleted':
      return `${getIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
    case 'added':
      return `${getIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
    case 'changed': {
      return `${getIndent(depth)}- ${node.key}: ${stringify(
        node.value1,
        depth,
      )}\n${getIndent(depth)}+ ${node.key}: ${stringify(
        node.value2,
        depth,
      )}`;
    }
    case 'unchanged':
      return `${getIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
    case 'nested': {
      const lines = iter(node.children, depth + 1);
      return `${getIndent(depth)}  ${node.key}: {\n${lines.join('\n')}\n${getIndent(depth)}  }`;
    }
    default:
      throw new Error(`Unknown status of node '${node.type}'.`);
  }
});

const formatStylish = (tree) => {
  const result = iter(tree, 1);
  return ['{', ...result, '}'].join('\n');
};
export default formatStylish;
