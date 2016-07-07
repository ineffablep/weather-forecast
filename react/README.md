# React Sample APP!

React Sample is a comprehensive project template for rapid application development using React. 

Why?

1. **One command to get started** - Type `npm start` to start development in your default browser.
2. **Rapid feedback** - Each time you hit save, changes hot reload and linting and automated tests run.
3. **One command line to check** - All feedback is displayed on a single command line.
4. **No more JavaScript fatigue** - We uses the most popular and powerful libraries for working with React.
5. **Working example app** - The included example apps shows how this all works together.
6. **Automated production build** - Type `npm run build` to do all this:

## Get Started
1. **Run the example app**. `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser.
When doing development with this kit, this command will continue watching all your files.
Every time you hit save the code is rebuilt, linting runs, and tests run automatically. 
Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
  
2. **Review the example app.**
This project includes a working example apps Five days weather forecast. 
Note how all source code is placed under /src. 
Tests are placed alongside the file under test. 
The final built app is placed under /dist. 
These are the files you run in production.

##Initial Machine Setup
1. **Install [Node 4.0.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance).Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
2. **Install [Git](https://git-scm.com/downloads)**. 
3. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome. (Optional, but helpful. The latter offers time-travel debugging.)
4. On a Mac? You're all set. If you're on Linux or Windows, complete the steps for your OS below.  
 
**On Linux:**  

 * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) 
 on the number of files Linux will watch. 
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` 

**On Windows:** 
 
* **Install Visual Studio 2015 https://www.visualstudio.com/downloads/download-visual-studio-vs

##Technologies
This project developed in enterprise level  rich development environment experience using the following technologies:

| **Tech** | **Description** |
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.   |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| 
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | 
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | 
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | 
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | 
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | 
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | 
| [Isparta](https://github.com/douglasduteil/isparta) | Code coverage tool for ES6 code transpiled by Babel. | 
| [TrackJS](https://trackjs.com/) | JavaScript error tracking. | [Free trial](https://my.trackjs.com/signup)|  
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | 
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | 
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. |

## Project Strcutre and more information
Check out [FAQ](/docs/FAQ.md)
