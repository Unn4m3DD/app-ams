import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VetView from "./../Views/VetView.js"
const Stack = createStackNavigator();

function VetScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="VetView" component={VetView} />
    </Stack.Navigator>
  )
}
export default VetScreen;
