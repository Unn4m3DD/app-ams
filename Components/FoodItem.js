

import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Entypo, FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
const { width: g_width, height: g_height } = Dimensions.get("window");
// import { Container } from './styles';

const FoodItem = ({ recommended, price, stars_initial, stared_initial, description, img_uri }) => {
  const [stared, setStared] = React.useState(stared_initial);
  const [stars, setStars] = React.useState(stars_initial);
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
      height: 300,
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "center"
    }}>
      <Image
        style={{ height: 250, width: "50%" }}
        source={{ uri: img_uri }}
      />
      <View style={{ width: g_width / 2 }}>
        <Text style={{ fontWeight: "bold" }}>{description}</Text>
        <Text style={{ fontWeight: "normal", marginVertical: 10 }}>Desde {price}€/Kg</Text>
        <View style={{ borderRadius: 15, paddingHorizontal: 4, backgroundColor: "#eee", height: 30, width: 70, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <TouchableOpacity onPress={() => {
            if (stared)
              setStars(stars - 1)
            else
              setStars(stars - 1)
            setStared(!stared)
          }}>
            {stared && <AntDesign style={{ position: "absolute" }} name="star" size={24} color="#fffa00" />}
            <AntDesign name="staro" size={24} color="#aaa" >
            </AntDesign>
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>{stars}</Text>
        </View>
      </View>
      {recommended &&
        <TouchableOpacity activeOpacity={.90} style={{
          position: "absolute", top: 10, left: 0,
          height: 30,
          paddingHorizontal: 10,
          backgroundColor: "#49A05E",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        }}>
          <FontAwesome5 name="drumstick-bite" size={20} color="#fff" />
          <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10 }}>Recomendado Pelo Seu Veterinário</Text>
        </TouchableOpacity>}
      <TouchableOpacity activeOpacity={.90} style={{
        position: "absolute", bottom: 10, right: 0,
        height: 30,
        paddingHorizontal: 10,
        backgroundColor: "#bf1919",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
      }}>
        <FontAwesome name="pencil" size={20} color="white" />
        <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10 }}>Dê-nos a sua Opinião</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  </View>
}

export default FoodItem;