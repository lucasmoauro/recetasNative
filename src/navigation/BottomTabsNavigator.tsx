import React from 'react';
import {RecipesScreen} from '../screens/RecipesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconProps {
  icon: string;
  color: string;
  size: number;
}

const BottomTabs = createBottomTabNavigator();

const RecipeIcon = ({icon, color, size}: IconProps) => (
  <Icon name={icon} color={color} size={size} />
);

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 16,
        },
        headerShown: false,
        tabBarIcon: ({color}) => {
          let icon = '';
          switch (route.name) {
            case 'Basica':
              icon = 'muffin';
              break;

            case 'Avanzada':
              icon = 'cupcake';
              break;
          }

          return <RecipeIcon icon={icon} color={color} size={30} />;
        },
      })}>
      <BottomTabs.Screen name="Basica" component={RecipesScreen} />
      <BottomTabs.Screen name="Avanzada" component={RecipesScreen} />
    </BottomTabs.Navigator>
  );
};
