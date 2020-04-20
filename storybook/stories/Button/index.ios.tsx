import React from 'react';
import { TouchableHighlight } from 'react-native';

export default function Button({ onPress, children }: ButtonProps) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

type ButtonProps = {
  children: any;
  onPress: () => void | {};
};
