
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, Octicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import ImagePick from '../Components/ImagePick';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FindItemsContext } from '../Contexts/FindItemsContext';
const { width: g_width, height: g_height } = Dimensions.get("window");

function PerFindView({ navigation }) {
  const { findItems, setFindItems } = React.useContext(FindItemsContext);
  const [form, setForm] = React.useState(
    {
      date: "",
      animal_weight: "",
      location: "",
      breed: "",
      age: "",
      animal_color: "",
      img_uri: "",
      description: "",
      color: "#fff"
    }
  )
  return <>
    <KeyboardAwareScrollView>
      <View style={{ margin: 20 }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <ImagePick setExternalImage={(uri) => { setForm({ ...form, img_uri: uri }) }} />
          <View style={{
            width: 300, marginLeft: 10
          }}>
            <TextInput
              value={form.description} onChangeText={(text) => setForm({ ...form, description: text })}
              multiline={true}
              numberOfLines={2}
              textAlignVertical="top"
              placeholder="Insira uma descrição"
              scrollEnabled={false}
              textBreakStrategy="highQuality"
              style={{
                padding: 10, flexWrap: "wrap", alignItems: "flex-start",
                backgroundColor: "#fff", fontSize: 18, fontWeight: "bold",
                marginRight: 100,
              }} />
          </View>
        </View>
        <Text style={{ marginTop: 10, fontSize: 20, }}>
          Informação Adicional
        </Text>
        <View style={[styles.table_item, { marginTop: 20 }]}>
          <Text>Data em que foi encontrado:</Text>
          <TextInput
            value={form.date} onChangeText={(text) => setForm({ ...form, date: text })}
            placeholder="Inserir Data *" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
          {/* <Text>{data.date}</Text> */}
        </View>
        <View style={styles.table_item}>
          <Text>Peso:</Text>
          <TextInput
            value={form.animal_weight} onChangeText={(text) => setForm({ ...form, animal_weight: text })}
            placeholder="Inserir Peso *" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
        </View>
        <View style={styles.table_item}>
          <Text>Encontrado em:</Text>
          <TextInput
            value={form.location} onChangeText={(text) => setForm({ ...form, location: text })}
            placeholder="Inserir Localização *" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
          {/* <TouchableOpacity
          style={{ backgroundColor: "#49A05E", alignItems: "center", justifyContent: "center", borderRadius: 5, padding: 10 }}
        ><Text style={{ color: "#fff" }}>Escolher Localização</Text></TouchableOpacity> */}
        </View>
        <View style={styles.table_item}>
          <Text>Raça:</Text>
          <TextInput
            value={form.breed} onChangeText={(text) => setForm({ ...form, breed: text })}
            placeholder="Inserir Raça *" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
        </View>
        <View style={styles.table_item}>
          <Text>Idade(aproximada):</Text>
          <TextInput
            value={form.age} onChangeText={(text) => setForm({ ...form, age: text })}
            placeholder="Inserir Idade *" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
        </View>
        <View style={styles.table_item}>
          <Text>Cor:</Text>
          <TextInput
            value={form.animal_color} onChangeText={(text) => setForm({ ...form, animal_color: text })}
            placeholder="Inserir Cor *" style={{ backgroundColor: "#fff", minWidth: 80, paddingVertical: 0, paddingHorizontal: 10 }} />
        </View>
        <View style={styles.table_item}>
          <Text style={{ paddingVertical: 2 }}>Cor:</Text>
          <TouchableOpacity style={{ backgroundColor: "#fff", padding: 5, width: 70, alignItems: "center", justifyContent: "center", borderRadius: 6 }}>
            <MaterialCommunityIcons name="eyedropper" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{ paddingVertical: 2 }}>* Campo Obrigatório</Text>
      </View>
    </KeyboardAwareScrollView>
    <TouchableOpacity activeOpacity={.90} style={{
      position: "absolute", bottom: 20, right: 0,
      height: 50,
      paddingHorizontal: 10,
      backgroundColor: `#37c2d8${Object.values(form).reduce((prev, current) => prev && (current.length > 0), true) ? "ff" : "88"}`,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    }}
      onPress={() => {
        if (!Object.values(form).reduce((prev, current) => prev && (current.length > 0), true)) return
        setFindItems([...findItems, form])
        navigation.navigate('AllFindView')
      }}
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