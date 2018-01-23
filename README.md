# whocalled

[![CircleCI](https://circleci.com/gh/drazisil/whocalled.svg?style=shield)](https://circleci.com/gh/drazisil/whocalled)

Get the calling file and line number for logging in NodeJS

### Installation

    npm install whocalled

    OR

    yarn add whocalled

## Usage

You can pretty much use this anywhere. It was designed with console logging in mind though.

```
const whoCalled = require('./index');

console.log(whoCalled(), 'Testing');
```

## Contributing

Feel free to submit issues and/or PRs!  In lieu of a formal style guide, 
please follow existing styles.

## Licence

MIT