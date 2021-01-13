
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';
const { width: g_width, height: g_height } = Dimensions.get("window");
import DateTimePicker from '@react-native-community/datetimepicker';
function PerPetSitterView({ navigation, route }) {
  const [currentStars, setCurrentStars] = React.useState(0);
  const [dateModal, setDateModal] = React.useState(false);
  const data = route.params
  return <>
    <TouchableOpacity activeOpacity={.90} style={{
      position: "absolute", top: 10, left: 0,
      zIndex: 1,
      width: "65%",
      height: 30,
      paddingHorizontal: 10,
      backgroundColor: "#49A05E",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
    }}>
      <AntDesign name="star" size={24} color="white" />
      <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10 }}>Recomendado Pelo Comunidade</Text>
    </TouchableOpacity>

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
        <View>
          <Text numberOfLines={2} style={{ fontSize: 27, fontWeight: "bold", marginRight: 180, marginLeft: 10 }}>{data.name}</Text>
          <Text numberOfLines={2} style={{ fontSize: 15, fontWeight: "normal", marginRight: 180, marginLeft: 10 }}>{data.description}</Text>
        </View>
      </View>
      <Text style={{ marginTop: 10, fontSize: 20, }}>
        Informação Extra
      </Text>
      <Text style={{ marginTop: 15, fontSize: 18 }}>
        Sobre este Pet Sitter
      </Text>
      <View style={styles.table_item}>
        <Text>Número de contratações:</Text><Text>10</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Número de contratações bem sucedidas:</Text><Text>11</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Custo:</Text><Text>12€/h</Text>
      </View>
      <Text style={{ marginTop: 20, alignSelf: "center" }}>Data selecionada: 27 Janeiro 2020, 16-18h</Text>
      <TouchableOpacity style={{
        width: 200,
        height: 50,
        borderRadius: 25,
        marginTop: 10,
        backgroundColor: "#49A05E",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
      }}
        onPress={() => setDateModal(true)}
      >
        <Text style={{ fontWeight: "bold", color: "#fff" }}>Selecione uma data e hora</Text>
      </TouchableOpacity>
      {dateModal && <DateTimePicker
        onChange={() => setDateModal(false)} display="calendar" value={1598051730000}></DateTimePicker>}
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Dê-nos a sua opinião</Text>
        <View style={{ flexDirection: "row" }}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return <TouchableOpacity key={index} onPress={() => {
              setCurrentStars(item)
            }}>
              {currentStars >= item && <AntDesign style={{ position: "absolute" }} name="star" size={45} color="#FFEE00" />}
              <AntDesign name="staro" size={45} color="#ccc" >
              </AntDesign>
            </TouchableOpacity>
          })}
        </View>
        <TouchableOpacity activeOpacity={.90} style={{
          height: 30,
          paddingHorizontal: 10,
          marginVertical: 20,
          backgroundColor: "#bf1919",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 15,

        }} onPress={() => { setCurrentStars(0) }}>
          <Text style={{ fontWeight: "bold", color: "#fff" }}>Desmarcar</Text>
        </TouchableOpacity>
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
        Alert.alert("","Será contactado pelo pet sitter durante as próximas 24 horas")
        navigation.navigate('AllSitterView')
      }}
    >
      <AntDesign name="shoppingcart" size={30} color="white" />
      <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10, fontSize: 18 }}>Reservar Pet Sitter</Text>
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
export default PerPetSitterView;