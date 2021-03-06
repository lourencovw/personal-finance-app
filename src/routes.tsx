
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
import Home from './pages/Home';
import Transactions from './pages/Transactions';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Transactions" component={Transactions}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
