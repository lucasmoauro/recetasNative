import React from 'react';
import {RecipesScreen} from '../screens/RecipesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Basica" component={RecipesScreen} />
      <BottomTabs.Screen name="Avanzada" component={RecipesScreen} />
    </BottomTabs.Navigator>
  );
};
