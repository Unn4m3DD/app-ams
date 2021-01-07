
import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';
import { UserDataContext } from '../Contexts/UserDataContext';

const { width: g_width, height: g_height } = Dimensions.get("window");
function ProfileView({ navigation }) {
  const { userData, setUserData } = React.useContext(UserDataContext);
  const avatar_size = React.useRef(new Animated.Value(250)).current;
  const user_orders = userData.orders.sort((a, b) => {
    const aa = a.date.split("/");
    const bb = b.date.split("/");
    for (let i = 2; i >= 0; i--) {
      if (aa[i] > bb[i]) return -1;
      if (bb[i] > aa[i]) return 1;
    }
    return 0;
  })
  return <ScrollView
    contentContainerStyle={{ alignItems: "center" }}
    onScroll={(event) => {
      if (event.nativeEvent.contentOffset.y < 100)
        avatar_size.setValue(250 - event.nativeEvent.contentOffset.y)

    }}
  >
    <View style={{ width: "100%" }} >
      <LinearGradient
        colors={['#4287f57f', '#26ed6f7f']}
        start={{ x: 0.7, y: 0 }}
        style={{ width: "100%", alignItems: "center" }}
      >
        <View style={{ height: 30 }} />
        <Animated.View style={[
          styles.avatar_shadow,
          {
            height: avatar_size,
            width: avatar_size,
            borderRadius: avatar_size.__getValue() / 2
          }
        ]}>
          <Image
            source={{ uri: userData.animal.image }}
            style={{ height: "100%", width: "100%", borderRadius: avatar_size.__getValue() / 2 }}
          />
        </Animated.View>
        <Text style={{ fontSize: 40 }}>{userData.animal.name}</Text>
        <Text style={{ fontSize: 20, paddingBottom: 20 }}>{userData.name}</Text>
      </LinearGradient>
    </View>

    <View style={{ flex: 1, height: 100, width: "100%", flexDirection: "row" }}>
      <TouchableOpacity style={[styles.info_button, { backgroundColor: "#4287f5bb" }]}>
        <Text style={styles.number_text}>{userData.orders.reduce((prev, current) => prev + (current.type === "vet" ? 1 : 0), 0)}</Text>
        <Text style={styles.description_text}>Consultas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.info_button, { backgroundColor: "#26ed6f77" }]}>
        <Text style={styles.number_text}>{userData.orders.reduce((prev, current) => prev + (current.type === "food" ? 1 : 0), 0)}</Text>
        <Text style={[styles.description_text, { color: "#00000099" }]}>Encomendas</Text>
      </TouchableOpacity>
    </View>

    {user_orders.map((item, index) => {
      return (
        <TouchableOpacity
          style={{ width: g_width, backgroundColor: "#f2f2f2", height: 90, padding: 13, justifyContent: "space-between" }}
          key={index}
          onPress={() => navigation.navigate('InvoiceView', { order_info: item })}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
              {"Data: "}
              <Text style={{ fontWeight: "normal", color: "#000b" }}>
                {item.date}
              </Text>
            </Text>
            {item.type == "vet" && <FontAwesome5 name="briefcase-medical" size={22} color="#0ad" />}
            {item.type == "food" && <FontAwesome5 name="drumstick-bite" size={22} color="#0ad" />}
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View></View>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
              {"Total: "}
              <Text style={{ fontWeight: "normal", color: "#000b" }}>
                {item.items.reduce((prev, current) => prev + current.price * (1 + current.vat / 100) * current.total, 0).toFixed(2)}€
                </Text>
            </Text>
          </View>
        </TouchableOpacity>
      )
    })}

  </ScrollView>
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

    elevation: 16
  }
});
export default ProfileView;