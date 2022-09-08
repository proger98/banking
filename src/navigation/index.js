import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TermsOfUseScreen from '../screens/TermsOfUse';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Group screenOptions={{ header: () => null }}>
                <Stack.Screen name={'Home'} component={HomeScreen} />
                <Stack.Screen name={'Terms'} component={TermsOfUseScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
};

export default AppNavigator;