# Set up and run the code

Instruction to run the code locally

1. Clone the repo
2. `cd geografia`
3. `npm install`
4. `npm run dev-server`

Then you can view the app http://localhost:8080/

5. `npm run test`

Will display results of all the unit tests

6. `npm run build:prod && npm run start`

This will build the app and then run production mode, you can view it on http://localhost:3000/

7. ` npm run storybook`

This will display all UI tests, you can view it on http://localhost:9001/

Please follow the instruction https://storybook.js.org/basics/quick-start-guide/ to install storybook locally.

8. Gemini screenshot tests, you need to have 3 terminals opened. First terminal is running storybook ( `npm run storybook`), on second terminal needs to start selenium server (`selenium-standalone start`), and on the third terminal you can run screenshot tests `npm run gemini-test`

9. `npm run cypress:open`

Click on "Run all tests" to run all end to end tests. Please make sure your dev-server is running.

NOTE: This project is set up to run on Ubuntu 14, some of the dependencies may be required differently on other operating systems.

# Technology used
### ES6

Default Parameters, Template Literals, Destructuring Assignment, Arrow Functions, Spread Syntax for Array and Object (babel plubin transform-object-rest-spread required), Promises, Block-Scoped Constructs Let and Const, Import and Export.

### React

React (16.3.1), Redux (3.7.2), redux-thunk, redux-mock-store, webpack (3.1.0), babel, css-loader, firebase, history, style-loader, jest, enzyme, storybook, gemini.

### CSS

OOCSS, BEM, flex box, rem unit, viewport unit vh and vw.

This project does not use responsive cause the layout is very simple.

# App structure

1. src/actions: contains  data of redux actions. Redux thunk is also used to return the function instead of action so that it can be used to delay dispatch action to redux store. In this small project, redux thunk is used to dispatch the data to the redux store.

2. src/reducers: contains data of redux reducers. They are pure functions return the new stage of redux store

3. src/components: contains all the state and stateless of react components.

4. src/routers: This app only has 1 main route. When user visits root path, it will render DashboardPage component.

5. src/selectors: it contains some functions to build select query to make ajax call. Also it constructs the data objects and array for the graph

7. src/store: it enables redux-thunk by applyMiddleware and return combineReducers of data.

8. src/styles: contains all the style of project. This project uses SASS; css-loader, sass-loader are also used; sourceMap is set to true to make it easier for development; extract-text-webpack-plugin is used to bundle all css into styles.css

9. app.js: this is the main execution file.

# Testing

### Structural testing

Jest snapshot testing are used and all components must have it own snapshot in src/tests/components

### Interaction testing

Enzyme is used to simulate user click event such as src/tests/components/Data.test.js

### Unit testing

1. src/tests/actions: test all actions in src/actions. redux-mock-store is used to mock redux store so that after an action is dispatched, we can check the store has correct values.

2. src/tests/reducers: test all reducers in src/reducers by passing the old state and action object and expect to receive correct new state.

3. src/test/selectors: contain all unit test cases for src/selectors

### Css and style testing

Storybook is used and all the stories tests are in src/test/stories. If you run

`npm run storybook`

you then can see all of the components in different state on http://localhost:9001

### Screenshot testing

Gemini is used for screenshot tests. All the screenshots are in gemini root folder. For this project, I only use chrome browser in gemini config, however I can extend to many other type of browsers and devices. To be able to run Gemini, chrome version on your machine need to be the latest version and I am using version 65.0.3325.181.

To run Gemini, you need to make sure storybook are running (http://localhost:9001) then start selenium server in one terminal

`selenium-standalone start`

then run 

`npm run gemini-test`

### End to end testing

Cypress is set up to run end to end tests. 

You need to start dev server in one terminal 

`npm run dev-server`

In another terminal, run all end to end tests

`npm run cypress:open`

That is all for this coding test, thank you very much for reading.
