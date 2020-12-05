import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';
import FindScreen from "./Screens/FindScreen.js";
import FoodScreen from "./Screens/FoodScreen.js";
import PetSitterScreen from "./Screens/PetSitterScreen.js";
import ProfileScreen from "./Screens/ProfileScreen.js";
import VetScreen from "./Screens/VetScreen.js";
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();
function App() {
  return (<>
    <StatusBar
      style={"auto"}
    />
    <View style={{ height: Constants.statusBarHeight, backgroundColor: "#0000" }} />
    <NavigationContainer >
      <Tab.Navigator initialRouteName="Encontrar Animal">
        <Tab.Screen
          options={{ tabBarIcon: ({ color, size }) => (<FontAwesome5 name="briefcase-medical" size={size} color={color} />) }}
          name="Veterinário" component={VetScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: ({ color, size }) => (<Octicons name="person" color={color} size={size} />) }}
          name="Pet Sitter" component={PetSitterScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: ({ color, size }) => (<Entypo name="magnifying-glass" size={size} color={color} />) }}
          name="Encontrar Animal" component={FindScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: ({ color, size }) => (<FontAwesome5 name="drumstick-bite" size={size} color={color} />) }}
          name="Comida" component={FoodScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: ({ color, size }) => (<Octicons name="person" color={color} size={size} />) }}
          name="Perfil" component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </>
  );
}
export default App;