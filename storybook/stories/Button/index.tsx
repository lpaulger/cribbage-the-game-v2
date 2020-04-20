import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

export default function Button({ onPress, children }: ButtonProps) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  );
}

type ButtonProps = {
  children: any;
  onPress: () => void | {};
};
