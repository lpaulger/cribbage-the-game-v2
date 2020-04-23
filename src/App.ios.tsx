/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import Reactotron from 'reactotron-react-native';
import { StorybookUIHMRRoot } from '../storybook';
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

if (__DEV__) {
  import('../storybook').then(() => console.log('Reactotron Configured'));
}

declare const global: { HermesInternal: null | {} };

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {global.HermesInternal == null ? null : (
            <View>
              <Text>Engine: Hermes</Text>
            </View>
          )}
          <Text>Lucas iOS</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Reactotron.storybookSwitcher(StorybookUIHMRRoot)(App);
