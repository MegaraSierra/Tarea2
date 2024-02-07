import React from "react";
import { SvgXml } from "react-native-svg";
import { Pressable } from "react-native";

export type StarFilledProps = {
  posicion: number;
  onClick: (posicion: number) => void;
};

const xml = {
  starFilled: '<svg xmlns="http://www.w3.org/2000/svg" fill="#eba421" width="800px" height="800px" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
};

const StarFilled = (props: StarFilledProps) => {
  const handleOnPress = () => {
    props.onClick(props.posicion);
  };

  return (
    <Pressable onPress={handleOnPress}>
      <SvgXml xml={xml.starFilled} width={50} height={50} />
    </Pressable>
  );
};

export default StarFilled;
