import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PerFoodView from "./../Views/PerFoodView.js"
import AllFoodView from "./../Views/AllFoodView.js"
const Stack = createStackNavigator();

function FoodScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, title: "" }}>
      <Stack.Screen name="AllFoodScreeView" component={AllFoodView} />
      <Stack.Screen name="PerFoodView" component={PerFoodView} />
    </Stack.Navigator>
  )
}
export default FoodScreen;
