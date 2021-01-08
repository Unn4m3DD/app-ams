import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';
import FindScreen from "./Screens/FindScreen.js";
import FoodScreen from "./Screens/FoodScreen.js";
import SitterScreen from "./Screens/SitterScreen.js";
import ProfileScreen from "./Screens/ProfileScreen.js";
import VetScreen from "./Screens/VetScreen.js";
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './Screens/LoginScreen.js';
import { UserDataContext } from "./Contexts/UserDataContext.js"
import { LogBox } from 'react-native';
import default_user_data from "./Contexts/DefaultUserData"
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const Tab = createMaterialTopTabNavigator();
function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [userData, setUserData] = React.useState(
    {
      email: "",
      name: "",
      address: "",
      post_code: "",
      phone_number: "",
      animal: {
        image: "",
        type: "",
        name: "",
        birth_date: "",
        breed: "",
        proof: ""
      },
      orders: [
      ],
      cart: [
      ]
    }
  )
  React.useEffect(() => {
    if (loggedIn)
      setUserData(default_user_data)
  }, [])
  return (<>
    <StatusBar
      style={"auto"}
    />
    <UserDataContext.Provider value={{ userData, setUserData }}>
      <View style={{ height: Constants.statusBarHeight, backgroundColor: "#0000" }} />
      {!loggedIn && <NavigationContainer><LoginScreen setLoggedIn={setLoggedIn} /></NavigationContainer>}
      {loggedIn && <NavigationContainer>
        <Tab.Navigator initialRouteName="Comida" tabBarPosition="bottom"
          tabBarOptions={{
            showIcon: true,
            labelStyle: {
              fontSize: 8
            },
            iconStyle: {
              alignItems: "center",
            }
          }}
        >
          <Tab.Screen
            options={{ tabBarIcon: ({ color, size }) => { return (<FontAwesome5 name="briefcase-medical" size={22} color={color} />) } }}
            name="Veterinário" component={VetScreen}
          />
          <Tab.Screen
            options={{ tabBarIcon: ({ color, size }) => (<Octicons name="person" size={22} color={color} />) }}
            name="Pet Sitter" component={SitterScreen}
          />
          <Tab.Screen
            options={{ tabBarIcon: ({ color, size }) => (<FontAwesome5 name="drumstick-bite" size={22} color={color} />) }}
            name="Comida" component={FoodScreen}
          />
          <Tab.Screen
            options={{ tabBarIcon: ({ color, size }) => (<Entypo name="magnifying-glass" size={22} color={color} />) }}
            name="Encontrar" component={FindScreen}
          />
          <Tab.Screen
            options={{ tabBarIcon: ({ color, size }) => (<Octicons name="person" color={color} size={22} />) }}
            name="Perfil" component={ProfileScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>}
    </UserDataContext.Provider>
  </>
  );
}
export default App;

