import fs from 'fs';
import { resolve, extname } from 'node:path';
import parseFile from './parsers.js';
import getTree from './getTree.js';
import formatter from './formatters/index.js';

const readFile = (file) => fs.readFileSync(file, 'utf-8');

const getFullFilePath = (filepath) => resolve(filepath);

const getFormat = (filepath) => extname(filepath).substring(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const pathFile1 = getFullFilePath(filepath1);
  const pathFile2 = getFullFilePath(filepath2);

  const dataFile1 = readFile(pathFile1);
  const dataFile2 = readFile(pathFile2);

  const diff = getTree(
    parseFile(dataFile1, getFormat(filepath1)),
    parseFile(dataFile2, getFormat(filepath2)),
  );
  return formatter(diff, formatName);
};
export default genDiff;
