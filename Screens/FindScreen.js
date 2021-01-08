import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllFindView from "./../Views/AllFindView.js"
import PerFindView from "./../Views/PerFindView.js"
import AddFindView from "./../Views/AddFindView.js"
import { FindItemsContext } from '../Contexts/FindItemsContext.js';

const Stack = createStackNavigator();

function FindScreen() {
  const [findItems, setFindItems] = React.useState([
    {
      date: "10/1/2021",
      animal_weight: 8.52,
      location: "Rua Lilali Almada",
      breed: "Felpudinho",
      age: 5,
      animal_color: "Laranja",
      img_uri: "https://static.wixstatic.com/media/4a5235_1bfcde2b7ca743a5a8b65c885aa5d77b~mv2.jpg/v1/fill/w_1000,h_571,al_c,q_90,usm_0.66_1.00_0.01/4a5235_1bfcde2b7ca743a5a8b65c885aa5d77b~mv2.jpg",
      description: "Dogoo encontrado em Almada",
      color: "#f92"
    },
    {
      date: "1/1/2021",
      breed: "Catisco",
      age: 2,
      location: "Rua Maria da Penha e dos 7 Anões, Jerusalem",
      animal_weight: 4.10,
      animal_color: "Cinzento",
      img_uri: "https://www.petz.com.br/blog/wp-content/uploads/2020/02/cat-sitting.jpg",
      description: "Catoo encontrado em Jerusalem",
      color: "#888"
    },
    {
      date: "20/12/2020",
      breed: "Over Powered",
      location: "Margem sul",
      age: "Older than the universe itself",
      animal_weight: "Over 9000",
      animal_color: "Amarelo",
      img_uri: "https://cnet4.cbsistatic.com/img/SKoNusMpuVhnuwlp02oSYb8uqq8=/0x182:1080x967/940x0/2020/05/08/ea85a111-dc22-4ac9-9e53-5f5771301c82/bostondynamicsspot.jpg",
      description: "Robô assassino na margem sul",
      color: "#ff0"
    },
  ])
  return (
    <FindItemsContext.Provider value={{findItems, setFindItems}} >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AllFindView" component={AllFindView} />
        <Stack.Screen name="AddFindView" component={AddFindView} />
        <Stack.Screen name="PerFindView" component={PerFindView} />
      </Stack.Navigator>
    </FindItemsContext.Provider>
  )
}
export default FindScreen;
