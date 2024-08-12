import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './route';
import Home from '../screen/home';
import Map from '../screen/map';
import Login from '../screen/login';
import Otp from '../screen/otp';
import AddProduct from '../screen/addProduct';

const Stack = createNativeStackNavigator();

export default (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.Login}>
                <Stack.Screen name={Routes.Login} component={Login} />
                <Stack.Screen name={Routes.Otp} component={Otp} />
                <Stack.Screen name={Routes.Home} component={Home} />
                <Stack.Screen name={Routes.Map} component={Map} />
                <Stack.Screen name={Routes.AddProduct} component={AddProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};