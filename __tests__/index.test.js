import { fileURLToPath } from 'url';
import path, { dirname } from 'node:path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1Output = readFile('stylish.txt');
const file2Output = readFile('plain.txt');
const file3Output = readFile('json.txt');
const file1 = './__fixtures__/file1.json';
const file2 = './__fixtures__/file2.json';
const file3 = './__fixtures__/file1.yml';
const file4 = './__fixtures__/file2.yml';

test('compare', () => {
  expect(genDiff(file1, file2)).toEqual(file1Output);
  expect(genDiff(file3, file4)).toEqual(file1Output);
  expect(genDiff(file1, file2, 'plain')).toEqual(file2Output);
  expect(genDiff(file3, file4, 'plain')).toEqual(file2Output);
  expect(genDiff(file1, file2, 'json')).toEqual(file3Output);
  expect(genDiff(file3, file4, 'json')).toEqual(file3Output);
});
