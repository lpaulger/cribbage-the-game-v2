import React from 'react';
import { SUIT } from './types';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { CenterView } from '../Layout/CenterView';
import { View } from 'react-native';
import { PlayingCard } from '.';

storiesOf('PlayingCard', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: () => null) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <PlayingCard
      value={select(
        'Card Value',
        ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
        '2',
      )}
      suit={select('Suit', SUIT, SUIT.Heart)}
      showFace={boolean('Show Face', true)}
    />
  ))
  .add('example hand', () => {
    const styles: { [k: string]: any } = {
      container: {
        position: 'absolute',
        left: 30,
      },
    };

    for (let i = 0; i < 6; i++) {
      styles[`card${i + 1}`] = {
        position: 'absolute',
        top: 0,
        left: i * 60,
      };
    }

    return (
      <View style={styles.container}>
        <View style={styles.card1}>
          <PlayingCard
            value={'A'}
            suit={SUIT.Heart}
            showFace={boolean('Show Face', true)}
          />
        </View>
        <View style={styles.card2}>
          <PlayingCard
            value={'2'}
            suit={SUIT.Club}
            showFace={boolean('Show Face', true)}
          />
        </View>
        <View style={styles.card3}>
          <PlayingCard
            value={'K'}
            suit={SUIT.Diamond}
            showFace={boolean('Show Face', true)}
          />
        </View>
        <View style={styles.card4}>
          <PlayingCard
            value={'J'}
            suit={SUIT.Club}
            showFace={boolean('Show Face', true)}
          />
        </View>
        <View style={styles.card5}>
          <PlayingCard
            value={'5'}
            suit={SUIT.Spade}
            showFace={boolean('Show Face', true)}
          />
        </View>
        <View style={styles.card6}>
          <PlayingCard
            value={'9'}
            suit={SUIT.Heart}
            showFace={boolean('Show Face', true)}
          />
        </View>
      </View>
    );
  });
