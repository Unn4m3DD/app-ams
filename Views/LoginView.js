import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { set } from 'react-native-reanimated';
import { UserDataContext } from '../Contexts/UserDataContext';
import default_user_data from "./../Contexts/DefaultUserData"
import firebase from "../services/firebase.js"
function LoginView({ navigation, route }) {
  const { setUserData } = React.useContext(UserDataContext)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  return <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
    <Image source={require("./../assets/icon1024.png")} style={{ height: 300, width: 300 }}></Image>

    <TextInput value={email} onChangeText={(text) => setEmail(text)}
      label="Email" autoCompleteType="email" autoCapitalize="none" style={{ width: "80%", marginVertical: 10 }} />
    <TextInput value={password} onChangeText={(text) => setPassword(text)}
      label="Password" autoCapitalize="none" secureTextEntry={true} style={{ width: "80%", marginVertical: 10 }} />
    <TouchableOpacity
      onPress={() => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
          firebase
            .database()
            .ref('users/' + user.user.uid).once("value").then((snapshot) => {
              console.log(snapshot.val())
              fetch(firebase.storage().ref().child(user.user.uid).getDownloadURL()).then(response => response.blob())
                .then(blob => {
                  let reader = new FileReader();
                  reader.onload = function () { setUserData({ ...userData, animal: { ...userData.animal, image: this.result } }) }; // <--- `this.result` contains a base64 data URI
                  reader.readAsDataURL(blob);
                });
              setUserData({ ...snapshot.val(), cart: [], orders: [] })
              route.params.setLoggedIn(true)
            })
        })
      }}
      style={{
        width: "80%", backgroundColor: "#49A05E", height: 65,
        borderRadius: 32, justifyContent: "center", alignItems: "center", marginVertical: 15
      }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>SIGN IN</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignInView")
      }}
      style={{
        width: "80%", backgroundColor: "#17a2b8", height: 65,
        borderRadius: 32, justifyContent: "center", alignItems: "center", marginVertical: 10
      }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>SIGN UP</Text>
    </TouchableOpacity>
  </View>

}

export default LoginView;

