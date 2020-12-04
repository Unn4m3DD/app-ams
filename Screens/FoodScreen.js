import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PerFooView from "./../Views/PerFooView.js"
import AllFoodView from "./../Views/AllFoodView.js"
const Stack = createStackNavigator();

function FoodScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, title: "" }}>
      <Stack.Screen name="AllFoodScreeView" component={AllFoodView} />
      <Stack.Screen name="PerFooView" component={PerFooView} />
    </Stack.Navigator>
  )
}
export default FoodScreen;
