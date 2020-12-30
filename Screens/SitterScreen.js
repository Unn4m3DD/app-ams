import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllSitterView from "../Views/AllSitterView.js"
import PerPetSitterView from "../Views/PerPetSitterView.js"
const Stack = createStackNavigator();

function SitterScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllSitterView" component={AllSitterView} />
      <Stack.Screen name="PerPetSitterView" component={PerPetSitterView} />
    </Stack.Navigator>
  )
}
export default SitterScreen;
