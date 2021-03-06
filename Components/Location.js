import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { UserDataContext } from '../Contexts/UserDataContext';
export default function Location() {
  const { userData } = React.useContext(UserDataContext);
  return <TouchableOpacity style={{ width: "100%", height: 80, alignItems: "center", padding: 20 }} activeOpacity={.7}>
    <View
      style={{
        width: "90%",
        height: 60,
        borderRadius: 30,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Entypo name="location-pin" size={24} color="black" />
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{"  " + userData.address}</Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "bold" }}>
        {userData.post_code}
      </Text>
    </View>
  </TouchableOpacity >
}