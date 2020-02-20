import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type Prop = {
  text: string;
};

const Button = ({text}: Prop) => {
  const onPress = () => {
    console.log('press');
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={style.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 15,
  },
});

export default Button;
