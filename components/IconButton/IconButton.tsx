import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ViewPropTypes,
  ViewProps,
} from 'react-native';

type PropType = {
  style: StyleProp<ViewStyle>;
};

const IconButton = ({style}: PropType) => {
  const onPress = () => {
    console.log('footerClick');
  };
  return (
    <View style={[styles.root, style]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.icon}>
          <Text style={styles.text}>Icon</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.text}>Text</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
  },
  icon: {
    width: '100%',
    textAlign: 'center',
  },
  text: {
    width: '100%',
    textAlign: 'center',
  },
});

export default IconButton;
