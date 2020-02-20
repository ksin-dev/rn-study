import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Tab = () => {
  const [activeTab, setActiveTab] = useState<Number>(0);

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => setActiveTab(0)}
        style={activeTab == 0 ? styles.active : styles.tab}>
        <View>
          <Text style={activeTab == 0 ? styles.activeText : styles.text}>
            거리순
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveTab(1)}
        style={activeTab == 1 ? styles.active : styles.tab}>
        <View>
          <Text style={activeTab == 1 ? styles.activeText : styles.text}>
            정확도순
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
  },
  active: {
    flex: 1,
    backgroundColor: '#13bcd0',
    color: 'white',
    paddingVertical: 10,
  },
  text: {
    color: '#424242',
    textAlign: 'center',
  },
  activeText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Tab;
