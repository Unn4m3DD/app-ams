
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
import VetCard from '../Components/VetCard';
import Filter from '../Components/Filter';
import AnimalItem from '../Components/AnimalItem';
import FoodItem from '../Components/FoodItem';
function VetView({navigation}) {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <VetCard />
      <TouchableOpacity
        activeOpacity={.85}
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 70,
          width: "90%",
          borderRadius: 25,
          backgroundColor: "#bf1919"
        }}
        onPress={() => navigation.navigate('EmergencyView')}
      >
        <Text adjustsFontSizeToFit style={{ fontSize: 25, color: "#fff", fontWeight: "bold" }}>Consulta de Urgência</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={.85}
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          width: "90%",
          borderRadius: 25,
          marginTop: 20,
          backgroundColor: "#fff"
        }}>
        <Text style={{ fontSize: 13, color: "#000" }}>
          Adquira já a ração recomendada pelo seu veterinário
        </Text>
      </TouchableOpacity>
      <FoodItem
        stared={true}
        price={5.52}
        img_uri="https://www.petstock.com.au/images/cache/product_feature/images/products/5f8f80e3d51881.37176137.jpeg"
        description="Ração de Frango para Cão Adulto Médio"
        stars_initial={212}
        stared_initial
        recommended
      />
    </ScrollView>
  );
}

export default VetView;