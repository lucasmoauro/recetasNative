import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BottomTabsNavigator, IconProps} from './BottomTabsNavigator';
import {RecipesScreen} from '../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigator} from './StackNavigator';

export type RootParams = {
  RecipesScreen: {recipeGroup: string; recipeType: string};
  NewOrExistingRecipeScreen: {actionType: string};
};

const TopTabs = createMaterialTopTabNavigator();

const RecipeIcon = ({icon, color, size}: IconProps) => (
  <Icon name={icon} color={color} size={size} />
);

export const TopTabsNavigator = () => {
  return (
    <TopTabs.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarPressColor: '#5856d6',
        tabBarIndicatorStyle: {
          backgroundColor: '#5656d6',
        },
        tabBarIcon: ({color}) => {
          let icon = '';
          switch (route.name) {
            case 'Pasteleria':
              icon = 'bowl-mix';
              break;
            case 'Panaderia':
              icon = 'food-croissant';
              break;
            case 'Chocolateria':
              icon = 'seed';
              break;
          }
          return <RecipeIcon color={color} icon={icon} size={24} />;
        },
      })}>
      <TopTabs.Screen
        name="Pasteleria"
        component={StackNavigator}
        initialParams={{id: 'pasteleria'}}
      />
      <TopTabs.Screen
        name="Panaderia"
        component={StackNavigator}
        initialParams={{id: 'panaderia'}}
      />
      <TopTabs.Screen
        name="Chocolateria"
        component={StackNavigator}
        initialParams={{id: 'chocolateria'}}
      />
    </TopTabs.Navigator>
  );
};
