import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { UserDataContext } from "../Contexts/UserDataContext.js"

function SignInView({ navigation }) {
  const { userData, setUserData } = React.useContext(UserDataContext);
  let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [postCode, setPostCode] = React.useState(["", ""])
  return <KeyboardAwareScrollView >
    <View style={{ alignItems: "center", height: "100%" }}>
      <View style={{ width: "100%" }}>
        <Image source={require("./../assets/icon1024.png")} style={{ height: 120, width: 120, marginLeft: 15 }}></Image>
      </View>

      <TextInput label="Email*" autoCompleteType="email" autoCapitalize="none"
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })} style={{ width: "80%", marginVertical: 10 }} >
      </TextInput>
      {userData.email.length > 0 && !email.test(userData.email) && <Text style={{ color: "#f33", fontSize: 9 }}>Insira um email valido</Text>}
      <TextInput label="Password*" autoCapitalize="none" secureTextEntry={true}
        onChangeText={(text) => setUserData({ ...userData, password1: text })} style={{ width: "80%", marginVertical: 10 }} value={userData.password1} />
      {userData.password1.length > 0 && userData.password1.length < 6 &&
        <Text style={{ color: "#f33", fontSize: 9 }}>A password deve conter pelo menos 6 caracteres</Text>}
      <TextInput label="Repetir Password*" autoCapitalize="none" secureTextEntry={true}
        onChangeText={(text) => setUserData({ ...userData, password2: text })} style={{ width: "80%", marginVertical: 10 }} value={userData.password2} />
      {userData.password2.length > 0 && userData.password2 != userData.password1 &&
        <Text style={{ color: "#f33", fontSize: 9 }}>As password inseridas devem ser idênticas</Text>}
      <TextInput label="Nome Completo*" autoCapitalize="none"
        onChangeText={(text) => setUserData({ ...userData, name: text })} style={{ width: "80%", marginVertical: 10 }} value={userData.name} />
      {userData.name.length > 0 && userData.name.split(" ").length < 2 &&
        <Text style={{ color: "#f33", fontSize: 9 }}>Insira um nome completo válido</Text>}
      <View style={{ width: "80%", marginVertical: 10, flexDirection: "row", alignItems: "center" }}>
        <TextInput
          onChangeText={(text) => setUserData({ ...userData, address: text })}
          label="Morada*" autoCapitalize="none" style={{ width: "80%" }} value={userData.address} />
        <TouchableOpacity style={{
          width: "20%",
          alignItems: "center",
          justifyContent: "center",
          height: 64,
        }}>
          <View style={{
            borderRadius: 32,
            backgroundColor: "#49A05E",
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Entypo name="location-pin" size={35} color="white" />
          </View>
        </TouchableOpacity>
      </View>


      <View style={{ width: "80%", marginVertical: 10, flexDirection: "row", alignItems: "center" }}>
        <TextInput
          onChangeText={(text) => setPostCode([text, postCode[1]])}
          textContentType="telephoneNumber" keyboardType="number-pad"
          label="Código Postal*" autoCapitalize="none" style={{ width: "60%" }} value={postCode[0]} />
        <Text style={{ fontWeight: "bold", width: "10%", textAlign: "center" }}>-</Text>
        <TextInput
          onChangeText={(text) => setPostCode([postCode[0], text])}
          textContentType="telephoneNumber" keyboardType="number-pad" value={postCode[1]}
          label="" autoCapitalize="none" style={{ width: "30%" }} />
      </View>
      {postCode[0].length > 0 && (postCode[0].length != 4 || postCode[1].length != 3) &&
        <Text style={{ color: "#f33", fontSize: 9 }}>O código postal inserido deve ser da forma XXXX - XXX</Text>}
      <TextInput
        onChangeText={(text) => setUserData({ ...userData, phone_number: text })}
        label="Número de Telemóvel*" autoCapitalize="none"
        textContentType="telephoneNumber" keyboardType="number-pad"
        style={{ width: "80%", marginVertical: 10 }} value={userData.phone_number} />
      {userData.phone_number.length > 0 && userData.phone_number.length != 9 &&
        <Text style={{ color: "#f33", fontSize: 9 }}>Insira um número de telemóvel válido</Text>}
      <TouchableOpacity
        onPress={() => {
          if (
            Object.values(userData).reduce((prev, current) => prev && (!current.length || current.length > 0)) &&
            userData.password1 == userData.password2 &&
            postCode[0].length == 4 &&
            postCode[1].length == 3 &&
            userData.phone_number.length == 9 
          ) {
            setUserData({ ...userData, post_code: postCode.join(" - ") })
            navigation.navigate("SignInAnimalView")
          }
        }}
        style={{
          width: "80%", backgroundColor: `#17a2b8${Object.values(userData).reduce((prev, current) => prev && (!current.length || current.length > 0)) &&
            userData.password1 == userData.password2 &&
            postCode[0].length == 4 &&
            postCode[1].length == 3 &&
            userData.phone_number.length == 9 
            ? "ff" : "44"}`, height: 65,
          borderRadius: 32, justifyContent: "center", alignItems: "center", marginVertical: 10
        }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>Registar</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAwareScrollView >

}

export default SignInView;

