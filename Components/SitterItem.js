

import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Entypo, FontAwesome5, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
const { width: g_width, height: g_height } = Dimensions.get("window");
// import { Container } from './styles';

const SitterItem = ({ name, recommended, price, stars_initial, stared_initial, description, img_uri, navigation }) => {
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
      height: 250,
      backgroundColor: "#fff",
      alignItems: "center",
    }}
      onPress={() => navigation.navigate("PerPetSitterView")}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
        <Image
          style={{ height: g_width / 3, width: g_width / 3, borderRadius: g_width / 6, marginVertical: 20 }}
          source={{ uri: img_uri }}
        />
        <View style={{ width: "50%", alignItems: "center", padding: 15 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 25, marginTop: 15 }}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text style={{ fontSize: 15, marginTop: 10 }}>{description} </Text>
          <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignContent: "center", marginTop: 10 }}>
            <Text style={{ fontWeight: "normal", height: 30, textAlignVertical: "center" }}>Desde {price}€/h</Text>
            <View
              style={{ borderRadius: 15, paddingHorizontal: 4, backgroundColor: "#eee", height: 30, width: 70, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <TouchableOpacity onPress={() => {
                if (!stared)
                  setStars(stars + 1)
                else
                  setStars(stars - 1)
                setStared(!stared)
              }}>
                {stared && <AntDesign style={{ position: "absolute" }} name="star" size={24} color="#FFEE00" />}
                <AntDesign name="staro" size={24} color="#aaa" >
                </AntDesign>
              </TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>{stars}</Text>
            </View>
          </View>
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
          <AntDesign name="star" size={24} color="white" />
          <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10 }}>Recomendado Pela Comunidade</Text>
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
        <MaterialIcons name="contacts" size={20} color="white" />
        <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10 }}>Contactar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  </View>
}

export default SitterItem;