# Marvel Native App


## GOALS

- Develop a POC around [Marvel Api](https://developer.marvel.com/)
- Have a clean architecture
- Use course knowledge
- Use ES6
- Clean code (comments)
- Available on git
- Make clean commits

## Purpose

Use of marvel API to display a list comics and infos associated to it.

## How to use : 

**! You'll be requested to enter public and private api keys,
first in any case you'll need to get them by sign-up to https://developer.marvel.com/signup !**

### Developper mode

Run the following commands in order to use the project in developer mode.
- ``npm install``
- ``npm start``
- ``react-native run-android`` or ``react-native run-ios``

### Production mode

Production's apk, or ios app, will be available soons here on github or on the store (App Store / google)

## Technology used 

- [React Native](https://github.com/facebook/react-native)
- [React Navigation](https://github.com/react-navigation/react-navigation)
- [Redux](https://github.com/reduxjs/redux/)
- [React Redux](https://github.com/reduxjs/react-redux)
- [Redux Storage](https://github.com/react-stack/redux-storage)
- [Redux Observables](https://github.com/redux-observable/redux-observable/)
- [Native Base](https://github.com/GeekyAnts/NativeBase)

## Project Archtecture 

- src : contain all the code source
    - assets: contains images, and resources.
    - Redux : contains every actions, reducers, and epics used with redux lib.
    - Utils : utilities for several problematic
    - Routes : contains view navigation configuration,
    - Components : contains "reusable" components.
    - Views : contains every "screens" of the application


## TODOS : 

- Add custom icon for app.
- Change name of the installed app
- Add unit tests
- Remove some native base components for custom homemade ones
- Exploit correctly events, stories, and series datas.