
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
import Location from '../Components/Location';
import { Entypo } from '@expo/vector-icons';
import Filter from '../Components/Filter';
import AnimalItem from '../Components/AnimalItem';
function AllFindView() {
  return (
    <>
      <ScrollView contentContainerStyle={{ alignItems: "stretch" }}>
        <Location />
        <Filter />
        <AnimalItem
          animal_weight={8.52}
          animal_color="Laranja"
          img_uri="https://static.wixstatic.com/media/4a5235_1bfcde2b7ca743a5a8b65c885aa5d77b~mv2.jpg/v1/fill/w_1000,h_571,al_c,q_90,usm_0.66_1.00_0.01/4a5235_1bfcde2b7ca743a5a8b65c885aa5d77b~mv2.jpg"
          description="Dogoo encontrado em Almada"
        />
        <AnimalItem
          animal_weight={4.10}
          animal_color="Cinzento"
          img_uri="https://www.petz.com.br/blog/wp-content/uploads/2020/02/cat-sitting.jpg"
          description="Catoo encontrado em Jerusalem"
        />
        <AnimalItem
          animal_weight={20.37}
          animal_color="Amarelo"
          img_uri="https://cnet4.cbsistatic.com/img/SKoNusMpuVhnuwlp02oSYb8uqq8=/0x182:1080x967/940x0/2020/05/08/ea85a111-dc22-4ac9-9e53-5f5771301c82/bostondynamicsspot.jpg"
          description="Robô assassino na margem sul"
        />
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute", height: 65, width: 65, borderRadius: 32, backgroundColor: "#37c2d8",
          bottom: 25, right: 25, alignItems: "center", justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      ><Entypo name="plus" size={45} color="white" />
      </TouchableOpacity>
    </>
  );
}

export default AllFindView;