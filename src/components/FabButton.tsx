import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const FabButton = () => {
  return (
    <View style={styles.fabContainer}>
      <Icon name="note-plus-outline" size={40} color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: '#fafafa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 5,
  },
});
