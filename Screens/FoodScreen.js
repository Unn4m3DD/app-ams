import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PerFoodView from "./../Views/PerFoodView.js"
import CartView from "./../Views/CartView.js"
import AllFoodView from "./../Views/AllFoodView.js"
const Stack = createStackNavigator();

function FoodScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, title: "" }}>
      <Stack.Screen name="CartView" component={CartView} />
      <Stack.Screen name="AllFoodView" component={AllFoodView} />
      <Stack.Screen name="PerFoodView" component={PerFoodView} />
    </Stack.Navigator>
  )
}
export default FoodScreen;
