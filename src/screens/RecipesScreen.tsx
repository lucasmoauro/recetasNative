import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Card, SearchInput, FabButton} from '../components';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

interface Props extends MaterialTopTabScreenProps<any, any> {}

export const RecipesScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8}}>
        {/* Buscador */}
        <SearchInput />

        {/* Tarjetas */}
        <Card onPress={() => navigation.navigate('Recipe')} />
      </View>

      {/* FAB */}
      <FabButton route="recipes" />
    </View>
  );
};
