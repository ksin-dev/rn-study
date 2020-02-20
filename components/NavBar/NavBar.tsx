import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../Button';

const NavBar = () => {
  return (
    <View style={styles.root}>
      <Button text="이전" />
      <View style={styles.center}>
        <Text style={styles.text}>우리</Text>
      </View>
      <Button text="검색" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    height: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  button: {},
  center: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 73,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default NavBar;
