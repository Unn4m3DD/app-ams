import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Picker, Alert, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AntDesign, Entypo } from '@expo/vector-icons';
import ImagePick from '../Components/ImagePick';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as DocumentPicker from 'expo-document-picker';
import { UserDataContext } from "../Contexts/UserDataContext.js"
import firebase from "./../services/firebase"

function SignInAnimalView({ route }) {
  const { userData, setUserData } = React.useContext(UserDataContext)
  const [signingIn, setSigningIn] = React.useState(false)
  return <>
    {signingIn &&
      <View style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#37c2d8" size={80} />
      </View>}
    {!signingIn && <KeyboardAwareScrollView>
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
        {userData.animal.birth_date.length > 0 && userData.animal.birth_date.split("/").length != 3 &&
          <Text style={{ color: "#f33", fontSize: 9 }}>Insira uma data no formato dd/mm/aaaa</Text>}
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
            if (Object.values(userData.animal).reduce((prev, current) => { return prev && current && current.length > 0 }, true)) {
              setSigningIn(true)
              firebase.auth().createUserWithEmailAndPassword(
                userData.email,
                userData.password1
              ).then(async (user) => {
                const user_data_copy = JSON.parse(JSON.stringify(userData))
                user_data_copy.cart = ""
                delete user_data_copy.cart
                user_data_copy.animal.image = ""
                delete user_data_copy.animal.image
                user_data_copy.password1 = ""
                delete user_data_copy.password1
                user_data_copy.password2 = ""
                delete user_data_copy.password2
                firebase
                  .database()
                  .ref('users/' + user.user.uid)
                  .set(
                    user_data_copy
                  ).then(() => {
                    firebase.storage().ref().child(user.user.uid).putString(userData.animal.image).then(() => {
                      route.params.setLoggedIn(true)
                    }).catch((error) => {
                      setSigningIn(false)
                      Alert.alert("", error.message)
                    });
                  }).catch((error) => {
                    setSigningIn(false)
                    Alert.alert("", error.message)
                  });
              }).catch((error) => {
                setSigningIn(false)
                Alert.alert("", error.message)
              });
            }
          }}
          style={{
            width: "80%",
            backgroundColor:
              `#17a2b8${Object.values(userData.animal).reduce((prev, current) => { return prev && current && current.length > 0 }, true)
                ? "ff" : "44"}`,
            height: 65,
            borderRadius: 32, justifyContent: "center", alignItems: "center", marginVertical: 10
          }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>Registar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>}
  </>

}

export default SignInAnimalView;

