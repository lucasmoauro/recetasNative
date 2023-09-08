import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RecipesScreen} from '../screens/RecipesScreen';
import {NewOrExistingRecipeScreen} from '../screens/NewOrExistingRecipeScreen';

const TopTabs = createMaterialTopTabNavigator();

export type RootParams = {
  RecipesScreen: {recipeGroup: string; recipeType: string};
  NewOrExistingRecipeScreen: {actionType: string};
};

export const TopTabsNavigator = () => {
  return (
    <TopTabs.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fafafa',
      }}>
      <TopTabs.Screen
        name="Pasteleria"
        component={RecipesScreen}
        initialParams={{id: 'pasteleria'}}
      />
      <TopTabs.Screen
        name="Panaderia"
        component={RecipesScreen}
        initialParams={{id: 'panaderia'}}
      />
      <TopTabs.Screen
        name="Chocolateria"
        component={RecipesScreen}
        initialParams={{id: 'chocolateria'}}
      />
    </TopTabs.Navigator>
  );
};
