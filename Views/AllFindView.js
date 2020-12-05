
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
import FoodItem from '../Components/FoodItem';
import Location from '../Components/Location';
import Filter from '../Components/Filter';
function AllFindView() {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "stretch" }}>
      <Location />
      <Filter />
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

export default AllFindView;