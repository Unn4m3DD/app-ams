import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from '../Views/LoginView';
import SignInView from '../Views/SignInView';
import SignInAnimalView from '../Views/SignInAnimalView';
const Stack = createStackNavigator();


function LoginScreen({ setLoggedIn }) {
  return <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="LoginView" component={LoginView} initialParams={{ setLoggedIn }} />
    <Stack.Screen name="SignInAnimalView" component={SignInAnimalView} initialParams={{ setLoggedIn }} />
    <Stack.Screen name="SignInView" component={SignInView} />
  </Stack.Navigator>

}

export default LoginScreen;