
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, Octicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import ImagePick from '../Components/ImagePick';
const { width: g_width, height: g_height } = Dimensions.get("window");

function PerFindView({ navigation }) {
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
        <ImagePick setExternalImage={() => { }} />
        <View style={{
          width: 300, marginLeft: 10
        }}>
          <TextInput
            multiline={true}
            numberOfLines={2}
            textAlignVertical="top"
            placeholder="Insira uma descrição"
            scrollEnabled={false}
            textBreakStrategy="highQuality"
            style={{
              padding: 10, flexWrap: "wrap", alignItems: "flex-start",
              backgroundColor: "#fff", fontSize: 18, fontWeight: "bold",
              marginRight: 80,
            }} />
        </View>
      </View>
      <Text style={{ marginTop: 10, fontSize: 20, }}>
        Informação Adicional
      </Text>
      <View style={[styles.table_item, { marginTop: 20 }]}>
        <Text>Data em que foi encontrado:</Text>
        <TextInput placeholder="Inserir Data *" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
        {/* <Text>{data.date}</Text> */}
      </View>
      <View style={styles.table_item}>
        <Text>Peso:</Text>
        <TextInput placeholder="Inserir Peso *" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
      </View>
      <View style={styles.table_item}>
        <Text>Encontrado em:</Text>
        <TouchableOpacity
          style={{ backgroundColor: "#49A05E", alignItems: "center", justifyContent: "center", borderRadius: 5, padding: 10 }}
        ><Text style={{ color: "#fff" }}>Escolher Localização</Text></TouchableOpacity>
      </View>
      <View style={styles.table_item}>
        <Text>Raça:</Text>
        <TextInput placeholder="Inserir Raça" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
      </View>
      <View style={styles.table_item}>
        <Text>Idade(aproximada):</Text>
        <TextInput placeholder="Inserir Idade *" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
      </View>
      <View style={styles.table_item}>
        <Text style={{ paddingVertical: 2 }}>Cor:</Text>
        <TouchableOpacity style={{ backgroundColor: "#fff", padding: 5, width: 70, alignItems: "center", justifyContent: "center", borderRadius: 6 }}>
          <MaterialCommunityIcons name="eyedropper" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={{ paddingVertical: 2 }}>* Campo Obrigatório</Text>

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
      <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10, fontSize: 18 }}>Anunciar</Text>
    </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  table_item: {
    height: 25,
    marginVertical: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  }
});
export default PerFindView;