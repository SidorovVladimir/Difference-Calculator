#### Hexlet tests and linter status:

[![Actions Status](https://github.com/SidorovVladimir/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/SidorovVladimir/frontend-project-46/actions) [![Node CI](https://github.com/SidorovVladimir/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/SidorovVladimir/frontend-project-46/actions/workflows/nodejs.yml)

#### Code Climate tests status: 

[![Maintainability](https://api.codeclimate.com/v1/badges/4f39bb78d1717725bfd0/maintainability)](https://codeclimate.com/github/SidorovVladimir/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4f39bb78d1717725bfd0/test_coverage)](https://codeclimate.com/github/SidorovVladimir/frontend-project-46/test_coverage)

### "Difference Calculator"
"Difference calculator" is a CLI utility that determines the difference between two data structures.

Utility features:
* Support of different input formats: yaml, yml, json.
* Report generation as plain text, stylish and json.

#### System requirements and installation guide:

1. Unix-like operating system.
2. Node.js v 16 or higher:
```
    node --version
```

#### Run the following commands in the terminal to install "Difference Calculator":

1. Clone the game repository with the command:

``` 
git clone git@github.com:SidorovVladimir/frontend-project-46.git 
```

2. Go to the directory with the utility with the command:

```
cd frontend-project-46
```

3. Install the dependencies with the command:

```
make install
```

4. Install the package with the command:

```
npm link
``` 
or 
```
sudo npm link
```
### Demonstration of the utility:

#### Help output:

```
gendiff -h
```
* The filepath1 and filepath2 arguments are the paths to the files.

#### Options:

* To set the output format, use ```-f ``` or ```--format``` with the ```<type>``` argument.

* Use ```plain```, ```stylish``` or ```json``` as ```<type>```.

* ```stylish``` is used by default.

[![asciicast](https://asciinema.org/a/oqAHjYAYcD951tHTckB3Xnqmo.svg)](https://asciinema.org/a/oqAHjYAYcD951tHTckB3Xnqmo)

#### Forming a report in the form of Stylish:

```
gendiff './__fixtures__/file1.json' './__fixtures__/file2.json'
```
or

```
gendiff -f stylish './__fixtures__/file1.yml' './__fixtures__/file2.yml'
```

[![asciicast](https://asciinema.org/a/iwh714bhpoGmHktFwio9rxgCB.svg)](https://asciinema.org/a/iwh714bhpoGmHktFwio9rxgCB)

#### Forming a report in the form of Plain:

```
gendiff -f plain './__fixtures__/file1.yml' './__fixtures__/file2.yml'
```

[![asciicast](https://asciinema.org/a/2Y502T80VCqYyJgxogLC7WUKk.svg)](https://asciinema.org/a/2Y502T80VCqYyJgxogLC7WUKk)

#### Forming a report in the form of JSON:

```
gendiff -f json './__fixtures__/file1.json' './__fixtures__/file2.yml'
```

[![asciicast](https://asciinema.org/a/UELwZ4uvUfeuxAwmtt0uovk1f.svg)](https://asciinema.org/a/UELwZ4uvUfeuxAwmtt0uovk1f)
