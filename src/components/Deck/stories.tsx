import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import CenterView from '../Layout/CenterView';
import { Deck } from '.';

storiesOf('Deck', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: () => null) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Deck />);
