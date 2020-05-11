import Reactotron from 'reactotron-react-native';

import React from 'react';
import { AppRegistry, NativeModules } from 'react-native';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { loadStories } from './storyLoader';

import './rn-addons';
import { Component } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories();
}, module);

let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true }); // This configuration can be changed based upon personal wants

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

//@ts-ignore
Reactotron.configure({
  name: 'React Native Demo',
  host: scriptHostname,
})
  .useReactNative()
  .connect();

export class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}
