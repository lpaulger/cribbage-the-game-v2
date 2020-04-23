/**
 * @format
 */

import React from 'react';
import { PlayingCard } from '.';

import { render } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import { SUIT } from './types';

it('renders correctly', () => {
  // check that a face value card renders correctly with a snapshot..
  const { baseElement } = render(
    <PlayingCard value="A" suit={SUIT.Club} showFace />,
  );

  expect(baseElement).toMatchSnapshot();
});
