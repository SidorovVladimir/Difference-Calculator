import _ from 'lodash';
import fs from 'fs';

const readFile = (file) => fs.readFileSync(file, 'utf-8');

const genDiff = (filepath1, filepath2) => {
  const dataFile1 = JSON.parse(readFile(filepath1));
  const dataFile2 = JSON.parse(readFile(filepath2));
  const keysFile1 = Object.keys(dataFile1);
  const keysFile2 = Object.keys(dataFile2);
  const keys = _.sortBy(_.union(keysFile1, keysFile2));

  const result = keys.map((key) => {
    if (!Object.hasOwn(dataFile2, key)) {
      return `- ${key}: ${dataFile1[key]}`;
    }
    if (!Object.hasOwn(dataFile1, key)) {
      return `+ ${key}: ${dataFile2[key]}`;
    }
    if (dataFile1[key] !== dataFile2[key]) {
      return `- ${key}: ${dataFile1[key]} \n+ ${key}: ${dataFile2[key]}`;
    }
    return `  ${key}: ${dataFile1[key]}`;
  });
  const out = ['{', ...result, '}'].join('\n');
  return out;
};
export default genDiff;
