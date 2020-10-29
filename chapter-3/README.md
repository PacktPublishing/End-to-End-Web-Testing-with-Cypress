# Chapter 3 
This directory contains useful code snippets for the Automation Testing with Cypress Book chapter 3; 

In this chapter we will use an opensource application [(todomvc)](http://todomvc.com/examples/react/#/) to test the use of command line tools when running and debugging cypress tests.


## Executing Tests by folder
To execute tests in this chapter one needs to get into the chapter folder and run the tests from the test folder itself as every folder is a module on its own. 

```
$ cd chapter-3
```

### Installing project dependencies
```
$ npm install

or 

$ npm ci

```

### Running all Cypress Tests
```
$ npm test
```
#### Run screencast 

![local-cypress-commands](https://user-images.githubusercontent.com/10160787/87683840-32ce0c00-c78a-11ea-9d52-0d5a80acbc40.gif)


### Running Cypress Tests on Command line 
```
$ npm run cypress:run
```

### Running Cypress Tests on Test Runner
```
$ npm run cypress:open
```

### Running Cypress Tests on chrome
```
$ npm run cypress:chrome
```

### Running Cypress Tests on firefox
```
$ npm run cypress:firefox
```


### Running Cypress Tests on Tablet viewport
```
$ npm run cypress:tablet-view
```

### Running Cypress Tests with secondary configuration
```
$ npm run cypress:run:secondary-configuration
```
### Running Cypress Tests headed on Electron browser
```
$ npm run cypress:electron:headed
```

### Running Cypress Tests with firefox on headless mode
```
$ npm run cypress:firefox:headless
```

### Running Cypress Tests with chrome on headless mode
```
$ npm run cypress:chrome:headless
```

### Running Cypress Tests on a non-default test folder 
```
$ npm run cypress:integration-v2
```

### Running Cypress Tests with debugger (headless mode)
```
$ npm run cypress:run:debugger
```

### Running Cypress Tests with debugger (headed mode)
```
$ npm run cypress:open:debugger
```

### Running Cypress debugger on server service
```
$ npm run cypress:open:server-debug
```

### Running a Cypress project within another Cypress project 
```
$ npm run cypress:project:v3
```

### Running Cypress with defined port 
```
$ npm run cypress:open:changed-port
```
