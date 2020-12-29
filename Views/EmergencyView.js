
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
function EmergencyView() {
  return (
    <>
      <ScrollView>
        <LinearGradient
          colors={['#26ed6f7f', '#4287f57f']}
          start={{ x: 0.7, y: 0 }}
          style={{ width: "100%", alignItems: "center", height: 300 }}
        >
          <Image source={require("./../assets/icon_transparent.png")} style={{ position: "absolute", top: 30, left: 30, height: 80, width: 80 }}></Image>
          <Text style={{ position: "absolute", top: 30, right: 30, textAlign: "right", fontWeight: "bold" }}>
            {"Urbanização da trindade baixa\nLote 27\n"}
            <Text style={{ fontWeight: "900" }}>10/11/2020</Text>
          </Text>
          <View style={{ height: 100 }}></View>
          <Text style={{ fontSize: 30, paddingHorizontal: 30, paddingVertical: 20, fontWeight: "bold" }}>
            Será atendido dentro de momentos
          </Text>
          <Text style={{ fontSize: 13, paddingRight: 100, paddingLeft: 30, fontWeight: "900" }}>
            Por favor faça uma breve descrição do ocorrido para que possamos iniciar o processo de triagem
          </Text>
        </LinearGradient>
        <TextInput numberOfLines={8} textAlignVertical="top"
          placeholder="Insira aqui o ocorrido"
          style={{ backgroundColor: "#fff", margin: 20, padding: 20 }}
        ></TextInput>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around"
        }}>
          <View style={{
            height: 50, width: 110, borderRadius: 25,
            backgroundColor: "#4287f5bb",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}>
            <Text style={{ color: "#fff", marginRight: 10, }}>Audio</Text>
            <FontAwesome name="microphone" size={24} color="white" />
          </View>
          <View style={{
            height: 50, width: 110, borderRadius: 25,
            backgroundColor: "#49A05E",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
          }}>
            <Text style={{ color: "#fff", marginRight: 10, }}>Enviar</Text>
            <FontAwesome style={{ left: -2 }} name="send-o" size={24} color="white" />
          </View>
        </View>
        <View style={{ alignItems: "center", marginVertical: 40 }}>
          <View style={{
            height: 50, width: 220, borderRadius: 25,
            backgroundColor: "#bf1919",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}>
            <Text style={{ color: "#fff", marginRight: 10, }}>Entrar na lista de espera</Text>
            <FontAwesome5 name="briefcase-medical" size={24} color="white" />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default EmergencyView;