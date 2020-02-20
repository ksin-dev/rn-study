import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconButton from '../IconButton';

const Footer = () => {
  return (
    <View style={styles.root}>
      <IconButton style={styles.item} />
      <IconButton style={styles.item} />
      <IconButton style={styles.item} />
      <IconButton style={styles.item} />
      <IconButton style={styles.item} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  item: {
    flex: 1,
  },
});

export default Footer;
