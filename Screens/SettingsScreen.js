import * as React from 'react';
import * as Font from 'expo-font';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const { width: g_width, height: g_height } = Dimensions.get("window");

function SettingsScreen() {
  return (
    <LinearGradient
      colors={['#4287f57f', '#26ed6f7f']}
      start={{ x: 0.7, y: 0 }}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={{ height: 30 }} />
        <View style={styles.avatar_shadow}>
          <Image
            source={{ uri: "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" }}
            style={styles.avatar_image}
          />
        </View>
        <Text style={{ fontSize: 50 }}>Boby</Text>
        <Text style={{ fontSize: 20, paddingBottom: 20 }}>José Freitas</Text>
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
      </ScrollView>
    </LinearGradient>
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
export default SettingsScreen;