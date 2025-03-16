# Setup

- [Init project](#init-project)
- [Install](#install)
  - [Server](#server)
  - [Unit testing](#unit-testing)
  - [E2E testing](#e2e-testing)
  - [Test reports](#test-reports)

## Init project

```sh
$ npm init      # Initialize in a dialogue mode
$ npm init -y   # Initialize with default values
```

## Install

### Server
```sh
$ npm i live-server
```

### Unit testing

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

Setup coverage report directory:
```json
"jest": {
    "coverageDirectory": "test/coverage",
}
```

### E2E testing

Install Selenium WebDriver:
```sh
$ npm install --save-dev selenium-webdriver
```

Install concurrently to run sever and e2e test with selenium in parallel:
```sh
$ npm i -D concurrently
```

### Test reports

Install Jest-HTML-Reporter:
```sh
$ npm install jest-html-reporter --save-dev
```

Configure Jest

Update your *jest.config.js* file:
```js
module.exports = {
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './test-report.html',
      },
    ],
  ],
};
```

Or *package.json* "jest" section:
```json
"reporters": [
      "default",
      [
        "./node_modules/jest-html-reporter",
        {
          "pageTitle": "Test Report",
          "outputPath": "./test/report.html"
        }
      ]
    ],
```

Install Jest-JUnit:
```sh
$ npm install --save-dev jest-junit
```

Create or update your *jest.config.js* file with the following configuration:
```js
module.exports = {
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './test-reports',
        outputName: 'jest-test-results.xml',
      },
    ],
  ],
};
```

Using both reporters:
```js
module.exports = {
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './test-reports',
        outputName: 'jest-test-results.xml',
      },
    ],
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './test-report.html',
      },
    ],
  ],
};
```

Or in *package.json* "jest" section:
```json
"reporters": [
      "default",
      [
        "jest-junit",
        {
          "outputDirectory": "./test/reports",
          "outputName": "report.xml"
        }
      ],
      [
        "./node_modules/jest-html-reporter",
        {
          "pageTitle": "Test Report",
          "outputPath": "./test/reports/report.html"
        }
      ]
    ],
```

As a result, the "jest" section should look like this:
```json
"jest": {
    "coverageDirectory": "test/coverage",
    "reporters": [
      "default",
      [
        "jest-junit",
        {
          "outputDirectory": "./test/reports",
          "outputName": "results.xml"
        }
      ],
      [
        "./node_modules/jest-html-reporter",
        {
          "pageTitle": "Test Report",
          "outputPath": "./test/reports/results.html"
        }
      ]
    ],
    "transform": {
      "^.+\\.(js|jsx)?$": "babel-jest"
    },
    "testMatch": [
      "**/test/*.test.js"
    ]
  },
```
