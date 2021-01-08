

import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { Entypo, Feather } from '@expo/vector-icons';
const { width: g_width, height: g_height } = Dimensions.get("window");
// import { Container } from './styles';

const AnimalItem = ({ date, breed, age, animal_weight, animal_color, img_uri, description, location, color, navigation, }) => {
  return <View style={{ width: "100%", alignItems: "center", marginVertical: 20 }}>
    <TouchableOpacity activeOpacity={.95} style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: "95%",
      height: 400,
      backgroundColor: "#fff",
      alignItems: "center"
    }}
      onPress={() => navigation.navigate("PerFindView", { date, breed, age, animal_weight, animal_color, img_uri, description, navigation, color, location })}
    >
      <Image
        style={{ height: 250, width: "98%", margin: 5 }}
        source={{ uri: img_uri }}
      />
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ width: "70%", padding: 10 }}>
          <Text style={{ fontWeight: "bold" }} numberOfLines={1}>{description}</Text>
          <Text style={{ fontWeight: "normal", marginVertical: 10 }}>Cerca de {animal_weight}kg</Text>
          <Text style={{ fontWeight: "bold" }}>{animal_color}</Text>
        </View>
        <TouchableOpacity
          style={{ width: "30%", justifyContent: "center", alignItems: "center", paddingRight: 30 }}>
          <TouchableOpacity activeOpacity={.9} style={{
            width: 60, height: 60, borderRadius: 30,
            backgroundColor: "#49A05E", justifyContent: "center", alignItems: "center"
          }}>
            <Entypo name="share" size={23} color="white" />
            <Text style={{ color: "#fff", fontSize: 10 }}>Partilhar</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={.90} style={{
        position: "absolute", bottom: 10, right: 0,
        height: 35,
        paddingHorizontal: 10,
        backgroundColor: "#bf1919",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 158,
        borderBottomLeftRadius: 158,
      }}
        onPress={() => navigation.navigate("PerFindView")}
      ><Feather name="alert-circle" size={24} color="white" />
        <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10 }}>Este é o meu Animal</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  </View>
}

export default AnimalItem;