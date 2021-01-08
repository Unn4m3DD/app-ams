
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
import Location from '../Components/Location';
import { Entypo } from '@expo/vector-icons';
import Filter from '../Components/Filter';
import AnimalItem from '../Components/AnimalItem';
import { FindItemsContext } from '../Contexts/FindItemsContext';
function AllFindView({ navigation }) {
  const { findItems, setFindItems } = React.useContext(FindItemsContext);
  return (
    <>
      <ScrollView contentContainerStyle={{ alignItems: "stretch" }}>
        <Location />
        <Filter />
        {findItems.map((item, index) => {
          return <AnimalItem
            key={index}
            color={item.color}
            location={item.location}
            date={item.date}
            breed={item.breed}
            age={item.age}
            animal_weight={item.animal_weight}
            animal_color={item.animal_color}
            img_uri={item.img_uri}
            description={item.description}
            navigation={navigation}
          />
        })}
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
        onPress={() => navigation.navigate('AddFindView')}
      ><Entypo name="plus" size={45} color="white" />
      </TouchableOpacity>
    </>
  );
}

export default AllFindView;