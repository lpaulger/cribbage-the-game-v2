export interface InnerCardProps {
  value: string;
  suit: SUIT;
  color: string;
}

export enum SUIT {
  Heart = 'Heart',
  Diamond = 'Diamond',
  Club = 'Club',
  Spade = 'Spade',
}

export interface PlayingCardProps {
  suit: SUIT;
  value: string;
  showFace?: boolean;
}
