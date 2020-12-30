
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';
const { width: g_width, height: g_height } = Dimensions.get("window");

function PerFindView({ navigation }) {
  const [currentStars, setCurrentStars] = React.useState(0);
  const data = {
    img_uri: "https://static.wixstatic.com/media/4a5235_1bfcde2b7ca743a5a8b65c885aa5d77b~mv2.jpg/v1/fill/w_1000,h_571,al_c,q_90,usm_0.66_1.00_0.01/4a5235_1bfcde2b7ca743a5a8b65c885aa5d77b~mv2.jpg",
    description: "Dogoo encontrado em Almada",
    weight: 8.82,
    date: "4 Janeiro 2020",
    color: "#eb8934",
    age: 8,
    location: "Rua Maria da Penha e dos 7 Anões"
  }
  return <>
    <ScrollView contentContainerStyle={{ margin: 20 }}>
      <View style={{
        flexDirection: "row",
        alignItems: "center"
      }}>
        <View style={{
          height: 150,
          width: 150,
          borderRadius: 75,
          backgroundColor: "#ddd",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Image source={{ uri: data.img_uri }} style={{ height: 130, width: 130, borderRadius: 75 }} />
        </View>
        <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: "bold", marginRight: 180, marginLeft: 10 }}>{data.description}</Text>
      </View>
      <Text style={{ marginTop: 10, fontSize: 20, }}>
        Informação Adicional
      </Text>
      <View style={[styles.table_item, { marginTop: 20 }]}>
        <Text>Data em que foi encontrado:</Text><Text>{data.date}</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Peso:</Text><Text>{data.weight}kg</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Encontrado em:</Text><Text>{data.location}</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Raça:</Text><Text>Felpudinho</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Idade(aproximada):</Text><Text>{data.age + " anos"}</Text>
      </View>
      <View style={styles.table_item}>
        <Text style={{ paddingVertical: 2 }}>Cor:</Text>
        <View style={{ backgroundColor: data.color, padding: 2, color: "#fff", width: 70 }}></View>
      </View>
    </ScrollView>
    <TouchableOpacity activeOpacity={.90} style={{
      position: "absolute", bottom: 20, right: 0,
      height: 50,
      paddingHorizontal: 10,
      backgroundColor: "#37c2d8",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    }}
      onPress={() => navigation.navigate('AllFindView')}
    ><FontAwesome5 name="dog" size={30} color="white" />
      <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10, fontSize: 18 }}>Encontrei / Este é o meu animal</Text>
    </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  table_item: {
    height: 23,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  }
});
export default PerFindView;