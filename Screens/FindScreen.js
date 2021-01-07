import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllFindView from "./../Views/AllFindView.js"
import PerFindView from "./../Views/PerFindView.js"
import AddFindView from "./../Views/AddFindView.js"
const Stack = createStackNavigator();

function FindScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllFindView" component={AllFindView} />
      <Stack.Screen name="AddFindView" component={AddFindView} />
      <Stack.Screen name="PerFindView" component={PerFindView} />
    </Stack.Navigator>
  )
}
export default FindScreen;
