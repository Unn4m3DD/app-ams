import * as React from 'react';
import * as Font from 'expo-font';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';

const { width: g_width, height: g_height } = Dimensions.get("window");

function ProfileScreen() {
  const user_data = [
    {
      date: "10/04/2020",
      type: "vet",
      total: "13.30"
    },
    {
      date: "11/01/2020",
      type: "food",
      total: "16.12"
    },
    {
      date: "28/06/2020",
      type: "food",
      total: "25.53"
    },
    {
      date: "08/04/2019",
      type: "vet",
      total: "61.32"
    },
    {
      date: "10/10/2021",
      type: "vet",
      total: "12.43"
    },
  ].sort((a, b) => {
    const aa = a.date.split("/");
    const bb = b.date.split("/");
    for (let i = 2; i >= 0; i--) {
      if (aa[i] > bb[i]) return -1;
      if (bb[i] > aa[i]) return 1;
    }
    return 0;
  })
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={{ width: "100%" }} >
        <LinearGradient
          colors={['#4287f57f', '#26ed6f7f']}
          start={{ x: 0.7, y: 0 }}
          style={{ width: "100%", alignItems: "center" }}
        >
          <View style={{ height: 30 }} />
          <View style={styles.avatar_shadow}>
            <Image
              source={{ uri: "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" }}
              style={styles.avatar_image}
            />
          </View>
          <Text style={{ fontSize: 50 }}>Boby</Text>
          <Text style={{ fontSize: 20, paddingBottom: 20 }}>José Freitas</Text>
        </LinearGradient>
      </View>

      <View style={{ flex: 1, height: 100, width: "100%", flexDirection: "row" }}>
        <TouchableOpacity style={[styles.info_button, { backgroundColor: "#4287f5bb" }]}>
          <Text style={styles.number_text}>2</Text>
          <Text style={styles.description_text}>Consultas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.info_button, { backgroundColor: "#26ed6f77" }]}>
          <Text style={styles.number_text}>3</Text>
          <Text style={[styles.description_text, { color: "#00000099" }]}>Encomendas</Text>
        </TouchableOpacity>
      </View>

      {user_data.map((item, index) => {
        return (
          <TouchableOpacity
            style={{ width: g_width, backgroundColor: "#DFE0E2", height: 90, padding: 13, justifyContent: "space-between" }}
            key={index}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000b" }}>
                {"Data: "}
                <Text style={{ fontWeight: "normal" }}>
                  {item.date}
                </Text>
              </Text>
              {item.type == "vet" && <FontAwesome5 name="briefcase-medical" size={22} color="#0ad" />}
              {item.type == "food" && <FontAwesome5 name="drumstick-bite" size={22} color="#0ad" />}
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View></View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {"Total: "}
                <Text style={{ fontWeight: "normal" }}>
                  {item.total}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        )
      })}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  info_button: {
    flex: 1,
    width: g_width / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  number_text: {
    color: "#fff",
    fontSize: 35,
  },
  description_text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center"
  },
  avatar_shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  avatar_image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  }
});
export default ProfileScreen;