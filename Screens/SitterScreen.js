import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllSitterView from "../Views/AllSitterView.js"
import InvoiceView from "../Views/InvoiceView.js"
const Stack = createStackNavigator();

function SitterScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllSitterView" component={AllSitterView} />
      <Stack.Screen name="InvoiceView" component={InvoiceView} />
    </Stack.Navigator>
  )
}
export default SitterScreen;
