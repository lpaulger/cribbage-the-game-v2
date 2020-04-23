import React from 'react';
import { PlayingCard } from '.';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../Layout/CenterView';

storiesOf('PlayingCard', module)
  .addDecorator((getStory: () => null) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <PlayingCard />);
