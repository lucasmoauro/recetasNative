import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

export const SearchInput = () => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Buscar receta..."
        onChangeText={() => {}}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    width: '90%',
    height: '80%',
    backgroundColor: '#fafafa',
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 5,
    fontSize: 20,
    paddingLeft: 15,
  },
});
