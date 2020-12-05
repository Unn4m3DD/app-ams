import { Entypo, AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
export default function Filter() {
  const filter_screen_height = React.useRef(new Animated.Value(0)).current;
  const [filtersState, setFiltersState] = React.useState(false)
  const plus_minus_rotation = filter_screen_height.interpolate({ inputRange: [0, 250], outputRange: ["0deg", "360deg"] })
  const filter_data = [
    {
      name: "Raça",
      options: ""
    }
  ]
  return <>
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
        {filtersState && <AntDesign name="minuscircleo" size={24} color="black" />}
        {!filtersState && <AntDesign name="pluscircle" size={24} color="black" />}
      </Animated.View>

      <Text style={{ marginLeft: 10, }}>Adicionar Filtros</Text>
    </TouchableOpacity>

    <Animated.View style={{ height: filter_screen_height, padding: 30 }}>
      {["Tipo Animal", "Raça", "Peso", "Cor"].map((item, index) => {
        return <View key={index} style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
          <AntDesign name="pluscircle" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>{item}</Text>
        </View>
      })}
    </Animated.View>
  </>
}