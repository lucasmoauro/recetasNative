import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TopTabsNavigator} from './src/navigation/TopTabsNavigator';
import {AppProvider} from './src/context/AppContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <TopTabsNavigator />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
