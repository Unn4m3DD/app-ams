import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from "./../Views/ProfileView.js"
import InvoiceView from "./../Views/InvoiceView.js"
const Stack = createStackNavigator();

function VetScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileView" component={View} />
      <Stack.Screen name="InvoiceView" component={View} />
    </Stack.Navigator>
  )
}
export default VetScreen;
