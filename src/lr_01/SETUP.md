# Setup

## Init project

```sh
$ npm init      # Initialize in a dialogue mode
$ npm init -y   # Initialize with default values
```

## Install server
```sh
$ npm i live-server
```

## Install testing software

### Configure Jest

Install Jest:
```sh
$ npm i -D jest
```

Install babel for transforming ES6 modules to CommonJS used by Jest natively by default:
```sh
$ npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Create a Babel configuration file to include necessary presets:
```sh
$ touch .babelrc
```

Fill in the *.babelrc*:
```json
{
    "presets": ["@babel/preset-env"]
}

```

Configure jest in *package.json*.

Setup path for your tests:
```json
"scripts": {
    "test": "jest --verbose ./test"
  },
```

Setup file transforming and matching options:
```json
"jest": {
    "transform": {
        "^.+\\.(js|jsx)?$": "babel-jest"
    },
    "testMatch": [
      "**/test/*.test.js"
    ]
  },
```
