### Install Expo and init project
You must have **Node** and **NPM** installed on your machine, with this now installing **Expo**, run the command below:
```bash
  npm install -g expo-cli
```

After installing the expo, let's start a **React Native** project, with the following commands, but first make sure you install the app called **Expo Go** on your smartphone.
```bash
  # Init project
  $ expo init NAME_PROJECT
  # Choose a template: › blank (TypeScript)  same as blank but with TypeScript configuration

  # Run project
  $ expo start --clear
```
With your smartphone connected to the same network as your computer, scan the **QR Code** and your project will open with the **Expo Go** app.

### Install fonts 
Look at this website https://docs.expo.dev/guides/using-custom-fonts/

```bash
  # Install font Inter
  $ expo install expo-font @expo-google-fonts/inter

  # Install app loading
  $ expo install expo-app-loading
```

### Use svg in react native project
To use svg in your project you need to install the react-native-svg library.

```bash
  #  Install library
  $ npm install react-native-svg
```

### Install iphone-x-helper, bottom-sheet, reanimated and gesture-handler
```bash
# Install, install iphone-x-helper
$ npm install react-native-iphone-x-helper

# Install bottom-sheet
$ expo install @gorhom/bottom-sheet@^4

# Install reanimated
# In babel.config.js add plugin line: plugins: ['react-native-reanimated/plugin'],
$ expo install react-native-reanimated

# Install gesture-handler
# In App.tsx import in the first line: import 'react-native-gesture-handler'
$ expo install react-native-gesture-handler
```