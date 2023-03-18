import fs from 'fs';
import path from 'node:path';
import parseFile from './parsers.js';
import getTree from './getTree.js';
import formatter from './formatters/index.js';

const getFullFilePath = (filepath) => path.resolve(filepath);

const getFormat = (filepath) => path.extname(filepath).substring(1);

const readFile = (file) => {
  const fullPath = getFullFilePath(file);
  const data = fs.readFileSync(fullPath, 'utf-8');

  return parseFile(data, getFormat(fullPath));
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);

  const diff = getTree(data1, data2);

  return formatter(diff, formatName);
};
export default genDiff;
