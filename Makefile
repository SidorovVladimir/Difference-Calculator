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
run3:
	gendiff './__fixtures__/file1.json' './__fixtures__/file2.yml'
run4:
	gendiff -f plain './__fixtures__/file1.json' './__fixtures__/file2.json'
run5:
	gendiff -f plain './__fixtures__/file1.yml' './__fixtures__/file2.yml'
run6:
	gendiff -f plain './__fixtures__/file1.json' './__fixtures__/file2.yml'
run7:
	gendiff -f json './__fixtures__/file1.json' './__fixtures__/file2.json'
run8:
	gendiff -f json './__fixtures__/file1.yml' './__fixtures__/file2.yml'
run9:
	gendiff -f json './__fixtures__/file1.json' './__fixtures__/file2.yml'