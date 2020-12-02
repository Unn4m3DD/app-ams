import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Vet" component={() => <Text>VetScreen</Text>} />
        <Tab.Screen name="PetSitter" component={() => <Text>PetSitterScreen</Text>} />
        <Tab.Screen name="Find" component={() => <Text>FindScreen</Text>} />
        <Tab.Screen name="Food" component={() => <Text>FoodScreen</Text>} />
        <Tab.Screen name="Settings" component={() => <Text>SettingsScreen</Text>} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;