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
const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const file3 = getFixturePath('file1.yml');
const file4 = getFixturePath('file2.yml');

test.each([
  { a: file1, b: file2, extended: 'json' },
  { a: file3, b: file4, extended: 'yml' },
])('compare $extended format', ({ a, b }) => {
  expect(genDiff(a, b)).toEqual(expectedStylish);
  expect(genDiff(a, b, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(a, b, 'plain')).toEqual(expectedPlain);
  expect(genDiff(a, b, 'json')).toEqual(expectedJson);
});
