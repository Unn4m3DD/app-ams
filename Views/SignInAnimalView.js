import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Picker } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AntDesign, Entypo } from '@expo/vector-icons';
import ImagePick from '../Components/ImagePick';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as DocumentPicker from 'expo-document-picker';
import { UserDataContext } from "../Contexts/UserDataContext.js"

function SignInAnimalView({ route }) {
  const { userData, setUserData } = React.useContext(UserDataContext);
  return <KeyboardAwareScrollView>
    <View style={{ alignItems: "center", height: "100%", marginTop: 5 }}>
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }}>
        <Image source={require("./../assets/icon1024.png")} style={{ height: 150, width: 150 }} />
        <ImagePick setExternalImage={(image_uri) => { setUserData({ ...userData, animal: { ...userData.animal, image: image_uri } }) }} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "80%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Tipo:</Text>
        <Picker
          mode="dropdown"
          style={{ height: 50, width: 130 }} itemStyle={{ textAlign: "right" }}
          selectedValue={userData.animal.type != "" ? userData.animal.type : "Escolher"}
          onValueChange={(itemValue) => itemValue != "Escolher" && setUserData({ ...userData, animal: { ...userData.animal, type: itemValue } })}
        >
          {["Escolher", "Cão", "Gato", "Periquito", "Robô Assassino", "Outro"].map((item, index) => <Picker.Item key={index} label={item} value={item} />)}
        </Picker>
      </View>
      <TextInput
        value={userData.animal.name}
        onChangeText={(text) => setUserData({ ...userData, animal: { ...userData.animal, name: text } })}
        label="Nome*" autoCapitalize="none" style={{ width: "80%", marginVertical: 10 }} />
      <TextInput
        value={userData.animal.birth_date}
        onChangeText={(text) => setUserData({ ...userData, animal: { ...userData.animal, birth_date: text } })}
        label="Data Nascimento*" autoCapitalize="none" style={{ width: "80%", marginVertical: 10 }} />
      <TextInput
        value={userData.animal.breed}
        onChangeText={(text) => setUserData({ ...userData, animal: { ...userData.animal, breed: text } })}
        label="Raça*" autoCapitalize="none" style={{ width: "80%", marginVertical: 10 }} />
      <TouchableOpacity
        style={{
          width: "80%", backgroundColor: "#49A05E", height: 65,
          borderRadius: 32, justifyContent: "center", alignItems: "center", marginVertical: 10
        }}
        onPress={() => DocumentPicker.getDocumentAsync({ multiple: false, type: "application/pdf" }).then(result => {
          setUserData({ ...userData, animal: { ...userData.animal, proof: result.name } })
        })}
      >

        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>{userData.animal.proof.length > 0 ? userData.animal.proof : "Anexar Comprovativo*"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityState={{ disabled: true }}
        onPress={() => {
          if (Object.values(userData.animal).reduce((prev, current) => prev && current.length > 0, true))
            route.params.setLoggedIn(true)
        }}
        style={{
          width: "80%",
          backgroundColor:
            `#17a2b8${Object.values(userData.animal).reduce((prev, current) => prev && current.length > 0, true)
              ? "ff" : "44"}`,
          height: 65,
          borderRadius: 32, justifyContent: "center", alignItems: "center", marginVertical: 10
        }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>Registar</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAwareScrollView>

}

export default SignInAnimalView;
