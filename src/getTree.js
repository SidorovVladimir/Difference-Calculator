import _ from 'lodash';

const getTree = (data1, data2) => {
  const keysFile1 = Object.keys(data1);
  const keysFile2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keysFile1, keysFile2));
  const result = keys.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      return {
        key,
        status: 'deleted',
        value: data1[key],
      };
    }
    if (!Object.hasOwn(data1, key)) {
      return {
        key,
        status: 'added',
        value: data2[key],
      };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key,
        children: getTree(data1[key], data2[key]),
        status: 'nested',
      };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        status: 'changed',
        value1: data1[key],
        value2: data2[key],
      };
    }
    return {
      key,
      status: 'unchanged',
      value: data1[key],
    };
  });
  return result;
};
export default getTree;
