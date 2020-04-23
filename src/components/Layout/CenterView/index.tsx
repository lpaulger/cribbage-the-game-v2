import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function CenterView({ children }: CenterView) {
  return <View style={styles.main}>{children}</View>;
}

type CenterView = {
  children: null;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});