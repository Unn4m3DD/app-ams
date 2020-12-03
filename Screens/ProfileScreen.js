import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from "./../Views/ProfileView.js"
import InvoiceView from "./../Views/InvoiceView.js"
const Stack = createStackNavigator();

function ProfileScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileView" component={ProfileView} />
      <Stack.Screen name="InvoiceView" component={InvoiceView} />
    </Stack.Navigator>
  )
}
export default ProfileScreen;
