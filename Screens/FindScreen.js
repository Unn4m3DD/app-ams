import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllFindView from "./../Views/AllFindView.js"
const Stack = createStackNavigator();

function FindScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllFindView" component={AllFindView} />
    </Stack.Navigator>
  )
}
export default FindScreen;
