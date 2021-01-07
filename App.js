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
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const Tab = createMaterialTopTabNavigator();
function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [userData, setUserData] = React.useState(
    {
      email: "default_email",
      name: "default_name",
      address: "default_address",
      post_code: "default_post_code",
      phone_number: "default_phone_number",
      animal: {
        image: "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" ,
        type: "default_type",
        name: "default_name",
        birth_date: "default_birth_date",
        breed: "default_breed",
        proof: "default_proof"
      },
      orders: [
        {
          date: "10/04/2020",
          type: "food",
          items: [
            {
              name: "Ração para pastor alemão, 1Kg",
              price: 13,
              vat: 23,
              total: 2
            },
            {
              name: "Ração para periquito, 200g",
              price: 4,
              vat: 23,
              total: 1
            }
          ],
          get total() {
            return this.items.reduce((prev, current) => prev + current.price * (1 + current.vat / 100) * current.total)
          }
        }
      ]
    }
  )
  console.log(UserDataContext)

  return (<>
    <StatusBar
      style={"auto"}
    />
    <UserDataContext.Provider value={{ userData, setUserData }}>
      <View style={{ height: Constants.statusBarHeight, backgroundColor: "#0000" }} />
      {!loggedIn && <NavigationContainer><LoginScreen setLoggedIn={setLoggedIn} /></NavigationContainer>}
      {loggedIn && <NavigationContainer>
        <Tab.Navigator initialRouteName="Encontrar" tabBarPosition="bottom"
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

