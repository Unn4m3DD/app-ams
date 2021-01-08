
import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import FoodItem from '../Components/FoodItem';
import { UserDataContext } from '../Contexts/UserDataContext';

function AllFoodView({ navigation }) {
  const { userData, setUserData } = React.useContext(UserDataContext)
  return (
    <>
      <ScrollView contentContainerStyle={{ alignItems: "stretch", paddingBottom: 30 }}>
        <TouchableOpacity style={{ width: "100%", height: 80, alignItems: "center", padding: 20 }} activeOpacity={.7}>
          <View
            style={{
              width: "90%",
              height: 60,
              borderRadius: 30,
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="location-pin" size={24} color="black" />
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>{"  Rua Lilali, Almada"}</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              3290-331
        </Text>
          </View>
        </TouchableOpacity >
        <FoodItem
          navigation={navigation}
          stared={true}
          price={5.52}
          vat={23}
          img_uri="https://www.petstock.com.au/images/cache/product_feature/images/products/5f8f80e3d51881.37176137.jpeg"
          description="Ração de Frango para Cão Adulto Médio"
          stars_initial={212}
          stared_initial
          recommended
        />
        <FoodItem
          navigation={navigation}
          stared={true}
          price={7.24}
          vat={23}
          img_uri="https://www.petstock.com.au/images/cache/product_feature/images/products/5f8f8223a68f20.55145015.jpeg"
          description="Ração de Frango para Cão Adulto Grande"
          stars_initial={125}
        />
        <FoodItem
          navigation={navigation}
          stared={true}
          price={3.77}
          vat={23}
          img_uri="https://www.petstock.com.au/images/cache/product_feature/images/products/5f8f83f7069d04.75412903.jpeg"
          description="Ração de Frango para Cão Adulto Pequeno"
          stared_initial
          stars_initial={212}
        />
        <View style={{height: 10}}/>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={.9}
        style={{
          position: "absolute", bottom: 0, right: 0, left: 0,
          height: 50,
          backgroundColor: "#fcfcfc",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
        onPress={() => navigation.navigate("CartView")}
      >
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 10,
            backgroundColor: "#49A05E",
            alignItems: "center",
            justifyContent: "center",
            margin: 20

          }}>
          <Text style={{
            fontSize: 18,
            fontWeight: "bold", textAlign: "center", color: "#fff"
          }}>{userData.cart.reduce((prev, current) => prev + current.total, 0)}</Text>
        </View>
        <Text style={{ margin: 20 }}>Ver Carrinho</Text>
        <Text style={{ margin: 20 }}>{userData.cart.reduce((total, current) => total + current.price * current.total * (1 + current.vat / 100), 0).toFixed(2) + "€"}</Text>
      </TouchableOpacity>
    </>
  );
}

export default AllFoodView;