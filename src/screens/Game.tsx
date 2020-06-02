import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';

interface GameScreenProps {
  navigation: any;
}
export const GameScreen: React.FC<GameScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button onPress={() => navigation.goBack()} title="Quit Game" />
      <Text>Game Screen</Text>
    </SafeAreaView>
  );
};
