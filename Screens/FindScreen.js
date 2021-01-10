import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllFindView from "./../Views/AllFindView.js"
import PerFindView from "./../Views/PerFindView.js"
import AddFindView from "./../Views/AddFindView.js"
import { FindItemsContext } from '../Contexts/FindItemsContext.js';
import firebase from "./../services/firebase"

const Stack = createStackNavigator();

function FindScreen() {
  const [findItems, setFindItems] = React.useState([])
  firebase.database().ref('findItems').once("value").then((snapshot) => {
    const findItems = []
    snapshot.forEach(function (childSnapshot) {
      findItems.push({ ...childSnapshot.val(), firebase_key: childSnapshot.key })
    });
    setFindItems(findItems)
  })
  return (
    <FindItemsContext.Provider value={{ findItems, setFindItems }} >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AllFindView" component={AllFindView} />
        <Stack.Screen name="AddFindView" component={AddFindView} />
        <Stack.Screen name="PerFindView" component={PerFindView} />
      </Stack.Navigator>
    </FindItemsContext.Provider>
  )
}
export default FindScreen;
