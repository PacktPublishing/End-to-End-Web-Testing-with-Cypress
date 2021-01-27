# Chapter 4
This directory contains useful code snippets for the Automation Testing with Cypress Book chapter 4; 

In this chapter we will use an opensource application [(todomvc)](http://todomvc.com/examples/react/#/) to test the use of command line tools when running and debugging cypress tests.

## Visiting Todo Application page

![visiting-application-page](https://user-images.githubusercontent.com/10160787/90381711-6dc3a800-e086-11ea-9739-9124e72d0fc7.gif)


## Asserting Element Exists on Todo Application

![asserting-todo-input-element](https://user-images.githubusercontent.com/10160787/90391973-b4b99980-e096-11ea-9d0c-24151785f7f6.gif)


## Adding an new Todo Item 

![adding a todo](https://user-images.githubusercontent.com/10160787/90876176-e8543680-e3aa-11ea-8a8f-a1615dc9be81.gif)


## Asserting added todo items exist

![asserting-state-change](https://user-images.githubusercontent.com/10160787/90876451-60226100-e3ab-11ea-87be-9eca4bcdd041.gif)


## Cypress disable file watching
This command, will disable the Cypress auto reload functionality when the files are changed. 

```
npm run cypress:run-disable-file-watching
```
