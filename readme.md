# Name That Fish

In this assignment we will be building a guessing game called "Name That Fish" where you guess the type of fish of a picture with a `controlled form` in react.The name of the game here is to KEEP YOUR STATE CLEAN AND AS DERIVED AS POSSIBLE.

## Learning Objectives

In order to complete this assignment, a student should be able to...

- use controlled forms to create an interface for submitting data
- use `onChange` handlers to track input values
- use `onSubmit` handlers to make form submissions
- pass down state setters in order to change the state of a parent component
- choose where the data for an application should live based off of the one way data binding model that react provides

## Setup

To get this project setup, you should:

- Run `npm i` to install all dependencies
- Run `npm run dev` to run the project

## In order to pass this assignment you should

### Standard Requirements

- [X ] Setup eslint
- [ X] Pass all linting checks

- To check if linting passes, run `npm run lint`

- [X ] Format code with prettier
- [X ] State should not be duplicated
- [ X] Variables should be named logicially
- [X ] No unneccessary console logs
- [ X] No commented out blocks of code (Code comments are fine)
- [ X ] Setup a github repository with your submission as the `main` branch, you will submit a link to this for grading (NOT A ZIP FILE)

### Assignment Specific Requirements

- [X ] Get your code to function EXACTLY like [This Site](https://name-that-fish-deployed.vercel.app/)
- [X ] Keep state as CLEAN AS POSSIBLE
- [ X] Place `initialFishes` in the correct component
- [X ] Derive all pieces of state that can be derived
- [X ] Don't mutate state directly, only use a state setter
  - example: don't use .splice on an array that you are rendering
- [X ] Keep all constants (variables that do not change over time) outside of components
- [X ] Form must reset after submitting
- [X ] Page must NOT reload after submitting
- [ X] ClassApp Code and FunctionalApp Code should be treated as separate apps as far as state goes
