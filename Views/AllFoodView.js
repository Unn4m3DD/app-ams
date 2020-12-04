
import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FoodItem from '../Components/FoodItem';

function AllFoodView() {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "stretch" }}>
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
        stared={true}
        price={5.52}
        img_uri="https://www.petstock.com.au/images/cache/product_feature/images/products/5f8f80e3d51881.37176137.jpeg"
        description="Ração de Frango para Cão Adulto Médio"
        stars_initial={212}
        stared_initial
        recommended
      />
      <FoodItem 
        stared={true}
        price={7.24}
        img_uri="https://www.petstock.com.au/images/cache/product_feature/images/products/5f8f8223a68f20.55145015.jpeg"
        description="Ração de Frango para Cão Adulto Grande"
        stars_initial={125}
      />
      <FoodItem 
        stared={true}
        price={3.77}
        img_uri="https://www.petstock.com.au/images/cache/product_feature/images/products/5f8f83f7069d04.75412903.jpeg"
        description="Ração de Frango para Cão Adulto Pequeno"
        stared_initial
        stars_initial={212}
      />
    </ScrollView>
  );
}

export default AllFoodView;