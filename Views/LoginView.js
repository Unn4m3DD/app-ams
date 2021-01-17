import React from 'react';
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { set } from 'react-native-reanimated';
import { UserDataContext } from '../Contexts/UserDataContext';
import firebase from "../services/firebase.js"
function LoginView({ navigation, route }) {
  const { userData, setUserData } = React.useContext(UserDataContext)
  const [email, setEmail] = React.useState("artur@gmail.com")
  const [password, setPassword] = React.useState("corona")
  const [signingIn, setSigningIn] = React.useState(false)
  return <>
    {signingIn &&
      <View style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#37c2d8" size={80} />
      </View>}
    {!signingIn &&
      < View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Image source={require("./../assets/icon1024.png")} style={{ height: 300, width: 300 }}></Image>

        <TextInput value={email} onChangeText={(text) => setEmail(text)}
          label="Email" autoCompleteType="email" autoCapitalize="none" style={{ width: "80%", marginVertical: 10 }} />
        <TextInput value={password} onChangeText={(text) => setPassword(text)}
          label="Password" autoCapitalize="none" secureTextEntry={true} style={{ width: "80%", marginVertical: 10 }} />
        <TouchableOpacity
          onPress={() => {
            setSigningIn(true)
            firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
              firebase.database().ref('users/' + user.user.uid).once("value").then((snapshot) => {
                const tmp_user_data = snapshot.val()
                if (tmp_user_data.orders == undefined)
                  tmp_user_data.orders = []
                else {
                  tmp_user_data.orders = Object.values(tmp_user_data.orders)
                }
                setUserData({ ...tmp_user_data, cart: [], uid: user.user.uid })
                route.params.setLoggedIn(true)
              }).catch((error) => { setSigningIn(false); Alert.alert("", error.message) })
            }).catch((error) => { setSigningIn(false); Alert.alert("", error.message) })
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
  </>

}

export default LoginView;

