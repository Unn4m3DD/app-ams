import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { UserDataContext } from "../Contexts/UserDataContext.js"

function SignInView({ navigation }) {
  const { userData, setUserData } = React.useContext(UserDataContext);
  const [pass1, setPass1] = React.useState("")
  const [pass2, setPass2] = React.useState("")
  return <KeyboardAwareScrollView >
    <View style={{ alignItems: "center", height: "100%" }}>
      <View style={{ width: "100%" }}>
        <Image source={require("./../assets/icon1024.png")} style={{ height: 120, width: 120, marginLeft: 15 }}></Image>
      </View>

      <TextInput label="Email*" autoCompleteType="email" autoCapitalize="none"
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })} style={{ width: "80%", marginVertical: 10 }} >
      </TextInput>
      <TextInput label="Password*" autoCapitalize="none" secureTextEntry={true}
        onChangeText={(text) => setPass1(text)} style={{ width: "80%", marginVertical: 10 }} value={pass1} />
      <TextInput label="Repetir Password*" autoCapitalize="none" secureTextEntry={true}
        onChangeText={(text) => setPass2(text)} style={{ width: "80%", marginVertical: 10 }} value={pass2} />
      <TextInput label="Nome Completo*" autoCapitalize="none"
        onChangeText={(text) => setUserData({ ...userData, name: text })} style={{ width: "80%", marginVertical: 10 }} value={userData.name} />
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
          onChangeText={(text) => setUserData({ ...userData, post_code: text })}
          textContentType="telephoneNumber" keyboardType="number-pad"
          label="Código Postal*" autoCapitalize="none" style={{ width: "60%" }} value={userData.post_code} />
        <Text style={{ fontWeight: "bold", width: "10%", textAlign: "center" }}>-</Text>
        <TextInput
          textContentType="telephoneNumber" keyboardType="number-pad"
          label="" autoCapitalize="none" style={{ width: "30%" }} />
      </View>
      <TextInput
        onChangeText={(text) => setUserData({ ...userData, phone_number: text })}
        label="Número de Telemóvel*" autoCapitalize="none"
        textContentType="telephoneNumber" keyboardType="number-pad"
        style={{ width: "80%", marginVertical: 10 }} value={userData.phone_number} />
      <TouchableOpacity
        onPress={() => {
          if (Object.values(userData).reduce((prev, current) => prev && (!current.length || current.length > 0)))
            navigation.navigate("SignInAnimalView")
        }}
        style={{
          width: "80%", backgroundColor: `#17a2b8${Object.values(userData).reduce((prev, current) => prev && (!current.length || current.length > 0))
            ? "ff" : "44"}`, height: 65,
          borderRadius: 32, justifyContent: "center", alignItems: "center", marginVertical: 10
        }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>Registar</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAwareScrollView >

}

export default SignInView;

