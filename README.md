# About
This app exemplifies how to make a login with validation using [react](https://facebook.github.io/react/), [redux](http://redux.js.org/docs/basics/UsageWithReact.html),[immutable](https://facebook.github.io/immutable-js/) and [redux-thunk](https://github.com/gaearon/redux-thunk).
It's built on top of [Webpack](http://webpack.github.io/) and [babel](http://babeljs.io/).

## Commands
```shell
 npm run test # Will run mocha tests compiling trhough babel
 npm run example # Launchs webpack-dev-server on port 8080 with hot reloading
 npm run build # Build unminified version
 npm run build:min # Build minified version
 npm run lint # Eslint src and test
 ```

## Folder structure

* build/ - contains the generated es5 code
* src/ - Source ES6/Sass code
    * components/ - reusable components
    * constants/ - Message and action type constants
    * pages/ - The only page, the home
    * styles/ - Common usade sass
    * index.tpl.html - Template for generated index.html trhoug [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
    * main.jsx - The SPA itself
    * reducer.js - only reducer for this example
* test
    * setup.js - Imports jsdom for react testing
    * css-module-compiler - Compiles sass on mocha
    * specs/ all the tests
