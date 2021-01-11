
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';
import { FindItemsContext } from '../Contexts/FindItemsContext';
import firebase from "./../services/firebase"
const { width: g_width, height: g_height } = Dimensions.get("window");

function PerFindView({ navigation, route }) {
  const { findItems, setFindItems } = React.useContext(FindItemsContext);
  const data = route.params
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
          <Image source={{ uri: "data:image/jpeg;base64," + data.image }} style={{ height: 130, width: 130, borderRadius: 75 }} />
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
        <Text>Peso:</Text><Text>{data.animal_weight}kg</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Encontrado em:</Text><Text style={{ marginLeft: 25, }} adjustsFontSizeToFit numberOfLines={1}>{data.location}</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Raça:</Text><Text>{data.breed}</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Idade(aproximada):</Text><Text>{data.age + (typeof (data.age) == typeof ("") ? "" : " anos")}</Text>
      </View>
      <View style={styles.table_item}>
        <Text style={{ paddingVertical: 2 }}>Cor:</Text>
        <View style={{ backgroundColor: data.color, padding: 2, color: "#fff", width: 70, height: 20 }}></View>
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
      onPress={() => {
        firebase.database().ref("findItems/" + data.firebase_key).remove()
        setFindItems(
          [...(findItems.filter((item) => item.description != data.description))]
        )
        navigation.navigate('AllFindView')
      }}
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
    justifyContent: "space-between",
    alignItems: "center"
  }
});
export default PerFindView;