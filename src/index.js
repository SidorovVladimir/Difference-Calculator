import _ from 'lodash';
import fs from 'fs';
import { resolve } from 'node:path';

const readFile = (file) => fs.readFileSync(file, 'utf-8');

const getFullFilePath = (filepath) => resolve(filepath);

const genDiff = (filepath1, filepath2) => {
  const pathFile1 = getFullFilePath(filepath1);
  const pathFile2 = getFullFilePath(filepath2);

  const dataFile1 = JSON.parse(readFile(pathFile1));
  const dataFile2 = JSON.parse(readFile(pathFile2));

  const keysFile1 = Object.keys(dataFile1);
  const keysFile2 = Object.keys(dataFile2);
  const keys = _.sortBy(_.union(keysFile1, keysFile2));

  const result = keys.map((key) => {
    if (!Object.hasOwn(dataFile2, key)) {
      return `  - ${key}: ${dataFile1[key]}`;
    }
    if (!Object.hasOwn(dataFile1, key)) {
      return `  + ${key}: ${dataFile2[key]}`;
    }
    if (dataFile1[key] !== dataFile2[key]) {
      return `  - ${key}: ${dataFile1[key]}\n  + ${key}: ${dataFile2[key]}`;
    }
    return `    ${key}: ${dataFile1[key]}`;
  });
  const out = ['{', ...result, '}'].join('\n');
  return out;
};
export default genDiff;
