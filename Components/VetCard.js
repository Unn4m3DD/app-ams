import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
export default function VetCard() {
  const [notifications, setNotifications] = React.useState(false);
  return <TouchableOpacity
    style={{
      width: "90%",
      height: 120,
      margin: 20,
      alignSelf: "center",
      borderRadius: 30,
      backgroundColor: "#fff",
      alignItems: "center",
    }}
    activeOpacity={.7}>
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5 name="clinic-medical" size={20} color="black" />
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{"  Consulta Agendada"}</Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "bold" }}>
        Clínica Lilali
      </Text>
    </View>
    <Text style={{marginTop: 5, width: "90%"}}>
      {"Consulta na marcada para 10/09/2021 às 18h30\n"}
    </Text>
    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
      <Text style={{ fontSize: 10, width: "90%" }}>
        Pedimos que tenha a app aberta 15 minutos antes da hora marcada para que seja possivel contacta-lo sem atraso
      </Text>
      <TouchableOpacity onPress={() => setNotifications(!notifications)}>
        {notifications && <Ionicons name="md-notifications" size={24} color="black" />}
        {!notifications && <Ionicons name="md-notifications-off" size={24} color="black" />}
      </TouchableOpacity>
    </View>
  </TouchableOpacity >
}