import React from 'react';
import Svg, { Symbol, Path, Rect, Defs, Pattern } from 'react-native-svg';
import { SUIT, PlayingCardProps } from './types';

import {
  Card_A,
  Card_2,
  Card_3,
  Card_4,
  Card_5,
  Card_6,
  Card_7,
  Card_8,
  Card_9,
  Card_10,
} from './InnerCard/Number';

import { Card_J } from './InnerCard/Jack';
import { Card_Q } from './InnerCard/Queen';
import { Card_K } from './InnerCard/King';
import { CARD_HEIGHT, CARD_WIDTH, CARD_BACK_COLOR } from './constants';

export function PlayingCard(props: PlayingCardProps) {
  const InnerCard = InnerCardComponents[`Card_${props.value}`];

  const cardProps = {
    color:
      props.suit === SUIT.Heart || props.suit === SUIT.Diamond
        ? '#F00'
        : '#000',
    ...props,
  };

  return (
    <Svg
      height={CARD_HEIGHT}
      preserveAspectRatio="none"
      viewBox="-120 -168 240 336"
      width={CARD_WIDTH}
      {...props}>
      <Symbol
        id="Suit_Club"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M30 150c5 235 55 250 100 350h-260c45-100 95-115 100-350a10 10 0 00-20 0 210 210 0 11-74-201 10 10 0 0014-14 230 230 0 11220 0 10 10 0 0014 14 210 210 0 11-74 201 10 10 0 00-20 0z"
          fill="#000"
        />
      </Symbol>
      <Symbol
        id="Suit_Spade"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M0-500c100 250 355 400 355 685a150 150 0 01-300 0 10 10 0 00-20 0c0 200 50 215 95 315h-260c45-100 95-115 95-315a10 10 0 00-20 0 150 150 0 01-300 0c0-285 255-435 355-685z"
          fill="#000"
        />
      </Symbol>
      <Symbol
        id="Suit_Diamond"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M-400 0C-350 0 0-450 0-500 0-450 350 0 400 0 350 0 0 450 0 500 0 450-350 0-400 0z"
          fill="#F00"
        />
      </Symbol>
      <Symbol
        id="Suit_Heart"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
          fill="red"
        />
      </Symbol>
      <Rect
        width={239}
        height={335}
        x={-119.5}
        y={-167.5}
        rx={12}
        ry={12}
        fill="#fff"
        stroke="#000"
      />
      {props.showFace === true && <InnerCard {...cardProps} />}
      {!props.showFace && <CardBack color={CARD_BACK_COLOR} />}
    </Svg>
  );
}

const CardBack = (props: { color: string }) => {
  return (
    <>
      <Defs>
        <Pattern
          id="1B_svg__a"
          width={6}
          height={6}
          patternUnits="userSpaceOnUse">
          <Path d="M3 0l3 3-3 3-3-3z" fill={props.color} />
        </Pattern>
      </Defs>
      <Rect
        fill="url(#1B_svg__a)"
        width={216}
        height={312}
        x={-108}
        y={-156}
        rx={12}
        ry={12}
      />
    </>
  );
};

export const InnerCardComponents: { [key: string]: any } = {
  Card_A,
  Card_2,
  Card_3,
  Card_4,
  Card_5,
  Card_6,
  Card_7,
  Card_8,
  Card_9,
  Card_10,
  Card_J,
  Card_Q,
  Card_K,
};

PlayingCard.defaultProps = {
  showFace: false,
};
