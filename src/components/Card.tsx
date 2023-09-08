import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Card = () => {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <Text style={styles.cardText} adjustsFontSizeToFit={true}>
          lorem ipsum dolor
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fafafa',
    height: 80,
    width: '80%',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 5,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
