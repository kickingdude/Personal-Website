import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Screens/Home';

const Stack = createNativeStackNavigator();

export default function WebsiteContainer() {
    return (
        <NavigationContainer>
            <Stack.Screen name={"Home"} component={Home} />
        </NavigationContainer>
    );
}