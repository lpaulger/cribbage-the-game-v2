import React from 'react';
import { SafeAreaView, View, Text, StatusBar, Button } from 'react-native';

import { PlayingCard } from '~/components/PlayingCard';
import { SUIT } from '~/components/PlayingCard/types';
import { CenterView } from '~/components/Layout/CenterView';

declare const global: { HermesInternal: null | {} };

interface HomeScreenProps {
  navigation: any;
}
export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView>
        {global.HermesInternal == null ? null : (
          <View>
            <Text>Engine: Hermes</Text>
          </View>
        )}
        <CenterView>
          <PlayingCard value={'A'} suit={SUIT.Heart} showFace={true} />
        </CenterView>
        <Button onPress={() => navigation.navigate('Game')} title="Play Game" />
      </SafeAreaView>
    </>
  );
};
