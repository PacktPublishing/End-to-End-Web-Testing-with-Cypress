# Chapter 11
This directory contains useful code snippets for the Automation Testing with Cypress Book chapter 11;

We have bootstrapped our tests with the [Cypress realworld application](https://github.com/cypress-io/cypress-realworld-app) project which is a simple financial application
that is meant to help Cypress users better understand how to test Cypress applications. The application is located in the root location in the directory `cypress-realworld-app`. 

To simplify execution of the application, we will only have three commands that will be used to run our test application. One command is to run to install the dependencies, the other to run the application, while the last command's purpose will be to reset the application as it uses a json database which needs resetting if at all any 
changes were made to the database in the process.

## Application Summary
The Application is a React Typescript application with the backend built with express Js and the database low-db.

## 1. Installing  Yarn 
This command will install yarn package manager in your machine globally
N.B This might require you to run with Sudo permissions e.g. `sudo npm install -g yarn`

```
npm install -g yarn

```

## 2. Installing our application dependencies

This command will install our test application dependencies and start our application (both the API and the frontend)

```
npm run cypress-init (Linux and MacOS)

```

```
npm run cypress-init-windows (Windows OS)

```

## 3. Running the application

This command will run our test application and start both the frontend and backend (API) and seed our low-db data. 

```
npm run cypress-app (Linux and Mac OS)

```

```
npm run cypress-app-windows ( Windows OS)

```

## 4. Resetting the application

This command will reset our low-db database to the original state without any additions that may have been made during the process of interaction with our application. 

```
npm run cypress-app-reset (Linux and Mac OS)

```

```
npm run cypress-app-reset (Windows OS)

```

### Application test usernames

Katharina_Bernie 
Tavares_Barrows
Allie2
Giovanna74

All usernames have a password of `s3cret`



## Executing Tests by folder
To execute tests in this chapter one needs to get into the chapter folder and run the tests from the test folder itself as every folder is a module on its own. 

```
$ cd chapter-11
```

### Installing project dependencies for Cypress tests
```
$ npm install

or 

$ npm ci

```

### Running all Cypress Tests
```
$ npm run cypress:run
```
