import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';

const homeName = 'Home';

const Stack = createNativeStackNavigator();

export default function NavigationContainer() {
    return (
        <NavigationContainer>
            <Stack.Screen name={homeName} component={Home} />
        </NavigationContainer>
    );
}