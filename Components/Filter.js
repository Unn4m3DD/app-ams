import { Entypo, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
export default function Filter() {
  const filter_screen_height = React.useRef(new Animated.Value(0)).current;
  const [filtersState, setFiltersState] = React.useState(false)
  const filter_data = [
    {
      name: "Tipo Animal", options: ["Cão", "Gato", "Periquito"],
      icon: <AntDesign name="pluscircle" size={24} color="black" />
    },
    {
      name: "Raça", options: ["Beagle", "Pastor Alemão", "Poodle", "Cavalier"],
      icon: <FontAwesome5 name="dog" size={24} color="black" />
    },
    {
      name: "Peso", options: (Array.from(Array(10).keys())).map((item, index) => `${index * 10 + 5}kg`),
      icon: <FontAwesome5 name="weight-hanging" size={24} color="black" />
    },
    {
      name: "Cor", options: ["Preto", "Castanho", "Cinzento", "Amarelo", "Laranja"],
      icon: <MaterialCommunityIcons name="invert-colors" size={24} color="black" />
    },
    {
      name: "Idade", options: (Array.from(Array(19).keys())).map((item, index) => `${index + 1}kg`),
      icon: <FontAwesome5 name="baby-carriage" size={24} color="black" />
    },
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
          <View key={index}
            style={{ flexDirection: "row", alignItems: "center", marginVertical: 5, height: 30, justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {item.icon}
              <Text style={{ marginLeft: 10 }}>{item.name}</Text>
            </View>
            <Picker
              mode="dropdown"
              style={{ height: 50, width: 120 }} itemStyle={{ textAlign: "right" }}>
              {item.options.map((item, index) => <Picker.Item key={index} label={item} value={item} />)}
            </Picker>
          </View>
        )
      })}
    </Animated.View>
  </>
}