import { fileURLToPath } from 'url';
import path from 'node:path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readFile('stylish.txt');
const expectedPlain = readFile('plain.txt');
const expectedJson = readFile('json.txt');

test.each(['json', 'yml'])('compare %s format', (format) => {
  const pathfile1 = getFixturePath(`file1.${format}`);
  const pathfile2 = getFixturePath(`file2.${format}`);

  expect(genDiff(pathfile1, pathfile2)).toEqual(expectedStylish);
  expect(genDiff(pathfile1, pathfile2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(pathfile1, pathfile2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(pathfile1, pathfile2, 'json')).toEqual(expectedJson);
});
