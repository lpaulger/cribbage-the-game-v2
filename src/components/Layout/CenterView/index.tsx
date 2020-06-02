import React from 'react';
import { View, StyleSheet } from 'react-native';

export const CenterView = ({ children }: CenterView) => {
  return <View style={styles.main}>{children}</View>;
};

type CenterView = {
  children: any;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
