/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SheetProvider } from 'react-native-actions-sheet';

import AppNavigator from './src/navigation';


const App = () => {

  return (
    <NavigationContainer>
      <SheetProvider>
        <AppNavigator />
      </SheetProvider>
    </NavigationContainer>
  )
};

export default App;