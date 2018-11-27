# React Boilerplate

A simple but very usefull React Boilerplate

Author: [@pabloiarriola](https://github.com/pabloiarriola) 

***

## Description 

In programming, the term boilerplate code refers to blocks of code used over and over again.

Let’s assume your development stack consists of several libraries, such as React, Babel, Jest, Webpack, etc. 
When you start a new project, you initialize all these libraries and configure them to work with each other.

So here is where the boilerplate comes in. It is a template that you can clone and reuse for every project.
This one was made as a proyect for Web Development at UVG.  


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- link:https://www.npmjs.com/get-npm/ [NPM]   
- [NodeJS](https://nodejs.org/en/)

### Installing

A step by step series of examples that tell you how to get a development env running

```
    Clone repository with git clone <repo>
	or Download the zip file
```

```
    run command npm install inside root folder app: it will download all the dependencies required to run it

    npm run build : to build application before execute
    npm start     : to run application an initialize server in port 3000
```
This will launch the webpack-dev-server at [localhost:3000](http://localhost:3000/) there you will find a simple react app.

## Running the tests

```
    npm run test :this will help you test the build and check for errors
```

## Project Structure

- Boilerplate  
  - dist  
    - server.js 
	- public
		- index.html (entry point)  
		- client.js
  - node_modules (the dependencies needed)  
  - src (here is all the source code)
    - client
		- snapshots
		- history.js
		- index.html
		- index.js
	- containers
		- about
			- index.js
		- app
			- index.js
		- home
			- index.js
	- modules
		- counter.js (the demo app code)
		- index.js
	- server
		- index.js
		- web.server.js
		- web.server.test.js
	- enzyme.setup.js
	- store.js
	
  - .babelrc (babel configuration file)  
  - package.json (npm package list)  
  - webpack.config.js (webpack configuration file)  
  - README.md (what you are reading now)  
  
## Packages included

If you choose to use this boilerPlate you will get the next packages

### Main dependencies
Dependencies to run and compile a webpack based node+react+redux application

| Package| Brief Description | Version|
|:-------------:|:-------------|:-----:|
| [webpack-node-externals][1] | Webpack allows you to define externals - modules that should not be bundled|1.7.2|
| [react][2] | Facebook's react library for building user interfaces | 16.0.0 |
| [react-dom][3] | Interface for modifying the web dom using react components | 16.0.0
| [react-router][4] | Declarative routing for react based applications | 4.3.1 |
| [redux][5] | Predictable state container for javascript apps | 4.0.1 |
| [react-redux][6] | Interface for react components to utilize redux stores | 5.1.1 |
| [html-webpack-plugin][7] | Simplifies creation of HTML files to serve your webpack bundles | 3.2.0 |
| [connected-react-router][8] | A Redux binding for React Router v4| 5.0.1 |
| [express][9] | Fast, unopinionated, minimalist web framework for node| 4.16.2 |
| [history][10] | Lets you easily manage session history anywhere JavaScript runs.| 4.7.2 |
| [react-router-dom][11] | DOM bindings for React Router | 4.3.1 |
| [react-test-renderer][12] | Experimental React renderer that can be used to render React components to pure JavaScript objects | 16.2.0 |
| [redux-thunk][13] | Allows you to write action creators that return a function instead of an action | 2.3.0 |

### Developer dependencies

| Package| Brief Description | Version|
|:-------------:|:-------------|:-----:|
| [babel-cli][14]| Babel command line |6.26.0|
| [babel-loader][15]|This package allows transpiling JavaScript files using Babel and webpack. | 7.1.2|
| [babel-preset-env][16] | The move makes it much easier to release and develop in sync with the rest of Babel!] | 1.6.1 |
| [babel-preset-react][17] | babel rules for [react styled code]| 6.24.1|
| [enzyme][18]| Makes it easier to assert, manipulate, and traverse your React Components' output.| 3.2.0|
| [enzyme-adapter-react-16][19] |  Should be compatible with all major test runners and assertion libraries out there | 1.1.0 |
| [react-router][4] | Declarative routing for react based applications | 4.3.1 |
| [react-redux][6] | Interface for react components to utilize redux stores | 5.1.1 |
| [react-router-dom][11] | DOM bindings for React Router | 4.3.1 |
| [react-test-renderer][12] | Experimental React renderer that can be used to render React components to pure JavaScript objects | 16.2.0 |
| [redux][5] | Predictable state container for javascript apps | 4.0.1 |
| [redux-thunk][13] | Allows you to write action creators that return a function instead of an action | 2.3.0 |
| [jest][20] | Delightful JavaScript Testing | 21.2.1 |
| [sanitize.css][21] | A CSS library that corrects broken and missing styles in all browsers, preserving useful defaults rather than unstyling everything. |7.0.3 |
| [webpack][22] | Bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.  | 3.12.0 |
| [webpack-cli][23] |Is a CLI tool for providing a flexible set of commands for developers to increase speed when setting up a custom webpack project |2.1.3 |


[1]:https://www.npmjs.com/package/webpack-node-externals
[2]:https://www.npmjs.com/package/react
[3]:https://www.npmjs.com/package/react-dom
[4]:https://www.npmjs.com/package/react-router
[5]:https://www.npmjs.com/package/redux
[6]:https://www.npmjs.com/package/react-redux
[7]:https://www.npmjs.com/package/html-webpack-plugin
[8]:https://www.npmjs.com/package/connected-react-router
[9]:https://www.npmjs.com/package/express
[10]:https://www.npmjs.com/package/history
[11]:https://www.npmjs.com/package/react-router-dom
[12]:https://www.npmjs.com/package/react-test-renderer
[13]:https://github.com/reduxjs/redux-thunk
[14]:https://www.npmjs.com/package/babel-cli
[15]:https://www.npmjs.com/package/babel-loader
[16]:https://www.npmjs.com/package/babel-preset-env
[17]:https://www.npmjs.com/package/@babel/preset-react
[18]:https://www.npmjs.com/package/enzyme
[19]:https://www.npmjs.com/package/enzyme-adapter-react-16
[20]:https://www.npmjs.com/package/jest
[21]:https://csstools.github.io/sanitize.css/
[22]:https://www.npmjs.com/package/webpack
[23]:https://www.npmjs.com/package/webpack-cli

