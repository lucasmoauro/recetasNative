import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  NewOrExistingRecipeScreen,
  RecipeScreen,
  RecipesScreen,
} from '../screens';
import {BottomTabsNavigator} from './BottomTabsNavigator';

interface Props extends StackNavigationProp<any, any> {}

type RootStackProps = {
  Recipes?: {type: 'pasteleria'};
  Recipe: undefined;
  NewOrExistingRecipe: {type: 'new'} | {type: 'edit'};
};

const Stack = createStackNavigator<RootStackProps>();

export const StackNavigator = ({route}: any) => {
  const routeName = route.name;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {routeName === 'Pasteleria' ? (
        <Stack.Screen name="Recipes" component={BottomTabsNavigator} />
      ) : (
        <Stack.Screen name="Recipes" component={RecipesScreen} />
      )}
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen
        name="NewOrExistingRecipe"
        component={NewOrExistingRecipeScreen}
      />
    </Stack.Navigator>
  );
};
