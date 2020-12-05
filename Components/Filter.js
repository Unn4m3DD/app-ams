import { Entypo, AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
export default function Filter() {
  const filter_screen_height = React.useRef(new Animated.Value(0)).current;
  const [filtersState, setFiltersState] = React.useState(false)
  const filter_data = [
    {name: "Tipo Animal", options: ["Cão", "Gato", "Periquito"]},
    {
      name: "Raça",
      options: ""
    },
    {name: "Raça"},
    {name: "Peso"},
    {name: "Cor"},
  ]
  const view_height = filter_data.length * 40;
  const plus_minus_rotation = filter_screen_height.interpolate({ inputRange: [0, view_height], outputRange: ["0deg", "360deg"] })
  
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
            toValue: view_height,
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

    <Animated.View style={{ height: filter_screen_height, paddingHorizontal: 30, overflow: "hidden" }}>
      {filter_data.map((item, index) => {
        return (
          <Animated.View key={index} style={{ flexDirection: "row", alignItems: "center", marginVertical: 5, height: 30 }}>
            <AntDesign name="pluscircle" size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>{item.name}</Text>
          </Animated.View>
        )
      })}
    </Animated.View>
  </>
}