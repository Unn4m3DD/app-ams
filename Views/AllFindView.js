
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import FoodItem from '../Components/FoodItem';
import Location from '../Components/Location';
function AllFindView() {
  const [filtersState, setFiltersState] = React.useState(false)
  const filter_screen_height = React.useRef(new Animated.Value(0)).current;
  const plus_minus_rotation = filter_screen_height.interpolate({ inputRange: [0, 250], outputRange: ["0deg", "360deg"] })
  return (
    <ScrollView contentContainerStyle={{ alignItems: "stretch" }}>
      <Location />
      <TouchableOpacity
        style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", marginTop: 20 }}
        onPress={() => {
          if (filtersState) {
            Animated.timing(filter_screen_height, {
              toValue: 0,
              duration: 400,
              useNativeDriver: false,
            }).start()
          } else {
            Animated.timing(filter_screen_height, {
              toValue: 250,
              duration: 400,
              useNativeDriver: false,
            }).start()
          }
          setFiltersState(!filtersState)

        }}
      >
        <Animated.View style={{
          transform:
          [{ rotate: plus_minus_rotation }]
        }}>
          {filtersState && <AntDesign name="minuscircleo" size={24} color="black" /> }
          {!filtersState && <AntDesign name="pluscircle" size={24} color="black" /> }
        </Animated.View>

        <Text style={{ marginLeft: 10, }}>Adicionar Filtros</Text>
      </TouchableOpacity>
      <Animated.View style={{ height: filter_screen_height }}>

      </Animated.View>
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