# Degrees to Directions ![travis build status](https://travis-ci.org/mguida22/degrees-to-directions.svg?branch=master)

Convert degrees into directions. Useful for windspeed, etc.

## Usage

```sh
$ npm install degrees-to-direction
```

```js
var d2d = require('degrees-to-direction');

d2d(0); // "N"
d2d(10); // "N"
d2d(45); // "ENE"
d2d(180); // "S"
```

## Running Tests

You may need to install mocha globally to run the tests.

```
$ npm install
$ npm test
```

### License
MIT
