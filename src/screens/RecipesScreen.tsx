import React from 'react';
// import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import {Card, SearchInput, FabButton} from '../components';

// interface Props extends MaterialTopTabScreenProps<any, any> {}

export const RecipesScreen = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 8}}>
          {/* Buscador */}
          <SearchInput />

          {/* Tarjetas */}
          <Card />
        </View>
        <View style={{backgroundColor: 'blue', flex: 1}}></View>

        {/* FAB */}
        <FabButton />
      </View>
      {/* <BottomTabsNavigator /> */}
    </>
  );
};
