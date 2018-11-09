<p align="center"><a href="https://www.liqid.de/de" target="_blank" rel="liqid noreferrer"><img width="100" src="https://www.startupnight.net/sites/default/files/2017-06/liqid-logo_red_rgb_750px.png" alt="liqid logo"></a></p>

<p align="center">
  <a href="https://github.com/usamahamed/DynamicSurvey"><img src="https://img.shields.io/circleci/project/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://github.com/usamahamed/DynamicSurvey"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://github.com/usamahamed/DynamicSurvey"><img src="https://img.shields.io/npm/dm/vue.svg" alt="Downloads"></a>
  <a href="https://github.com/usamahamed/DynamicSurvey"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://github.com/usamahamed/DynamicSurvey"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://github.com/usamahamed/DynamicSurvey"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
  <br>
  <a href="https://github.com/usamahamed/DynamicSurvey"><img src="https://saucelabs.com/browser-matrix/vuejs.svg" alt="Sauce Test Status"></a>
</p>

<h2 align="center">Dynamic Survey</h2>
Simple React/Redux app for creating a dynamic Survey that can use as module for any web APPs

## Introduction

### The App scenario is as following :
- user arrives to the site,
- then user enter button for enter survey,
- After user end the servey show a quick summery for the answers,
- Users can reset and enter Survey again .
### From the technical perspective, i build this app as following:
-  I use Redux to maintain app state,
-  I use localstorage as redux middleware to preserve APP data ,
-  Any time user accidentally leave servey every thing will preserve[answers-current ques-progress bar] ,
-  When user finish servey and click on reset button all gone[data-clear store-..]
- i also add service worker for offline use[PWA]

<!-- [START getstarted] -->
## Technology stack
- React-16
- Redux
- Airbnb eslint
- PWA
## Things Done
- Airbnb eslint guidelines has been used to make code consistent
- Style linting is done
- Routing using react-router-dom
- State management using redux
- Following Smart/Dump component approach in designing components
- Saving to localhost to restore data at any point
- Typechecking with PropTypes


<!-- [START getstarted] -->

## Getting Started

### Installation

- git clone the repository via ```git clone repository name``` and install dependances via ``` yarn install ```
-  ```yarn start```  to run in development mode
- ```yarn build```  to get a production build





