/**
 * @format
 */

import { Text } from 'react-native';
import React from 'react';
import Button from '..';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <Button
      onPress={() => {
        /* */
      }}>
      <Text> Button Test</Text>
    </Button>,
  );
});
