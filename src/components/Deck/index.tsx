import { PlayingCard } from '../PlayingCard';
import React from 'react';
import { View } from 'react-native';
import { CARD_HEIGHT, CARD_WIDTH } from '../PlayingCard/constants';

interface DeckProps {}

export const Deck: React.FC<DeckProps> = ({}) => {
  const styles: { [k: string]: any } = {
    container: {
      position: 'absolute',
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
    },
  };

  for (let i = 0; i < 6; i++) {
    styles[`card${i + 1}`] = {
      position: 'absolute',
      bottom: i,
      left: i * 2,
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <PlayingCard />
      </View>
      <View style={styles.card2}>
        <PlayingCard />
      </View>
      <View style={styles.card3}>
        <PlayingCard />
      </View>
      <View style={styles.card4}>
        <PlayingCard />
      </View>
      <View style={styles.card5}>
        <PlayingCard />
      </View>
      <View style={styles.card6}>
        <PlayingCard />
      </View>
    </View>
  );
};
