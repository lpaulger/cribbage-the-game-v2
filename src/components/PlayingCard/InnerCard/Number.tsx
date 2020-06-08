import React from 'react';
import { Symbol, Path, Use, G } from 'react-native-svg';
import { InnerCardProps } from '../types';

export const Card_A = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="Value_1"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-35}
        y={-35}
      />
      <Use xlinkHref="#Value_1" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <G transform="rotate(180)">
        <Use xlinkHref="#Value_1" height={32} width={32} x={-114.4} y={-156} />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
      </G>
    </>
  );
};

export const Card_2 = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="Value_Two"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M-225-225c-20-40 25-235 225-235s225 135 225 235c0 200-450 385-450 685h450V300"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>
      <Use xlinkHref="#Value_Two" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-35}
        y={-135.588}
      />
      <G transform="rotate(180)">
        <Use
          xlinkHref="#Value_Two"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-35}
          y={-135.588}
        />
      </G>
    </>
  );
};

export const Card_3 = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="Value_3"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M-250-320v-140h450L-110-80c10-10 60-40 110-40 200 0 250 120 250 270 0 200-80 310-280 310s-230-160-230-160"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>
      <Use xlinkHref="#Value_3" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-35}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-35}
        y={-35}
      />
      <G transform="rotate(180)">
        <Use xlinkHref="#Value_3" height={32} width={32} x={-114.4} y={-156} />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-35}
          y={-135.588}
        />
      </G>
    </>
  );
};

export const Card_4 = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="Value_4"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M50 460h200m-100 0v-920l-450 635v25h570"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>

      <Use xlinkHref="#Value_4" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-135.588}
      />
      <G transform="rotate(180)">
        <Use xlinkHref="#Value_4" height={32} width={32} x={-114.4} y={-156} />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-87.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={17.501}
          y={-135.588}
        />
      </G>
    </>
  );
};

export const Card_5 = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="Value_5"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M170-460h-345l-35 345s10-85 210-85c100 0 255 120 255 320S180 460-20 460s-235-175-235-175"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>
      <Use xlinkHref="#Value_5" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-35}
        y={-35}
      />
      <G transform="rotate(180)">
        <Use xlinkHref="#Value_5" height={32} width={32} x={-114.4} y={-156} />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-87.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={17.501}
          y={-135.588}
        />
      </G>
    </>
  );
};

export const Card_6 = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="6C_svg__a"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M-250 100a250 250 0 01500 0v110a250 250 0 01-500 0v-420A250 250 0 010-460c150 0 180 60 200 85"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>
      <Use xlinkHref="#6C_svg__a" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-35}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-35}
      />
      <G transform="rotate(180)">
        <Use
          xlinkHref="#6C_svg__a"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-87.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={17.501}
          y={-135.588}
        />
      </G>
    </>
  );
};

export const Card_7 = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="7C_svg__a"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M-265-320v-140h530C135-200-90 100-90 460"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>
      <Use xlinkHref="#7C_svg__a" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-35}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-35}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-35}
        y={-85.294}
      />
      <G transform="rotate(180)">
        <Use
          xlinkHref="#7C_svg__a"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-87.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={17.501}
          y={-135.588}
        />
      </G>
    </>
  );
};

export const Card_8 = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="8C_svg__a"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M-1-50a205 205 0 112 0h-2a255 255 0 102 0z"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>
      <Use xlinkHref="#8C_svg__a" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-35}
        y={-85.294}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-35}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-35}
      />
      <G transform="rotate(180)">
        <Use
          xlinkHref="#8C_svg__a"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-87.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={17.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-35}
          y={-85.294}
        />
      </G>
    </>
  );
};

export const Card_9 = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="9C_svg__a"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M250-100a250 250 0 01-500 0v-110a250 250 0 01500 0v420A250 250 0 010 460c-150 0-180-60-200-85"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>
      <Use xlinkHref="#9C_svg__a" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-68.529}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-68.529}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-35}
        y={-42}
      />
      <G transform="rotate(180)">
        <Use
          xlinkHref="#9C_svg__a"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-87.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={17.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-87.501}
          y={-68.529}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={17.501}
          y={-68.529}
        />
      </G>
    </>
  );
};

export const Card_10 = (props: InnerCardProps) => {
  return (
    <>
      <Symbol
        id="TC_svg__a"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid">
        <Path
          d="M-260 430v-860M-50 0v-310a150 150 0 01300 0v620a150 150 0 01-300 0z"
          stroke={props.color}
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </Symbol>
      <Use xlinkHref="#TC_svg__a" height={32} width={32} x={-114.4} y={-156} />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-135.588}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-87.501}
        y={-68.529}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={17.501}
        y={-68.529}
      />
      <Use
        xlinkHref={`#Suit_${props.suit}`}
        height={70}
        width={70}
        x={-35}
        y={-102.058}
      />
      <G transform="rotate(180)">
        <Use
          xlinkHref="#TC_svg__a"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-87.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={17.501}
          y={-135.588}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-87.501}
          y={-68.529}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={17.501}
          y={-68.529}
        />
        <Use
          xlinkHref={`#Suit_${props.suit}`}
          height={70}
          width={70}
          x={-35}
          y={-102.058}
        />
      </G>
    </>
  );
};