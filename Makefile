install:
	npm ci
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
run:
	gendiff './__fixtures__/file1.json' './__fixtures__/file2.json'
run2:
	gendiff './__fixtures__/file1.yml' './__fixtures__/file2.yml'