import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';


function LoginScreen({ setLoggedIn }) {
  return <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
    <Image source={require("./../assets/icon1024.png")} style={{ height: 300, width: 300 }}></Image>

    <TextInput label="Email" autoCompleteType="email" autoCapitalize="none" style={{ width: "80%", marginVertical: 10 }} />
    <TextInput label="Password" autoCapitalize="none" secureTextEntry={true} style={{ width: "80%", marginVertical: 10 }} />
    <TouchableOpacity
      onPress={() => setLoggedIn(true)}
      style={{
        width: "80%", backgroundColor: "#49A05E", height: 65,
        borderRadius: 32, justifyContent: "center", alignItems: "center", marginVertical: 15
      }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>SIGN IN</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: "80%", backgroundColor: "#17a2b8", height: 65,
        borderRadius: 32, justifyContent: "center", alignItems: "center", marginVertical: 10
      }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>SIGN UP</Text>
    </TouchableOpacity>
  </View>;
}

export default LoginScreen;