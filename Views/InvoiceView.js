
import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';
const { width: g_width, height: g_height } = Dimensions.get("window");
function InvoiceView({ route: { params: { order_info } } }) {
  const invoice_data = order_info.items
  return <ScrollView>
    <View>
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
          Obrigado por confiar nos nossos serviços
        </Text>
        <Text style={{ fontSize: 13, paddingRight: 100, paddingLeft: 30, fontWeight: "900" }}>
          Dedicamo-nos a constantemente ao bem estar do seu animal de estimação
        </Text>
      </LinearGradient>
    </View>
    <View
      style={{ height: 50, flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "#4287f5a0", alignItems: "center" }}
    >
      <Text style={{ width: "65%", fontSize: 20, fontWeight: "bold", color: "#fafafa" }}>Items</Text>
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>Total</Text>
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>Preço€</Text>
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>IVA%</Text>
    </View>
    {invoice_data.map((item, index) => {
      return (
        <View key={index} style={{ height: 50, flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center" }}>
          <Text numberOfLines={1} style={{ flex: 10, fontSize: 17, fontWeight: "bold" }}>{item.name}</Text>
          <Text numberOfLines={1} style={{ flex: 1, fontSize: 15, fontWeight: "bold" }}>{item.total}</Text>
          <Text numberOfLines={1} style={{ flex: 2, fontSize: 15, fontWeight: "bold" }}>{item.price.toFixed(2)}</Text>
          <Text numberOfLines={1} style={{ flex: 1, fontSize: 15, fontWeight: "bold" }}>{item.vat}</Text>
        </View>
      )
    })}
    <View style={{ height: 30, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
      <Text numberOfLines={1} style={{ flex: 5, textAlign: "right", paddingRight: 10 }}>SubTotal:</Text>
      <Text numberOfLines={1} style={{ flex: 1, fontSize: 15, fontWeight: "bold" }}>{invoice_data.reduce((total, current) => total + current.price * current.total, 0).toFixed(2)}€</Text>
    </View>
    <View style={{ height: 30, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <Text numberOfLines={1} style={{ flex: 5, textAlign: "right", paddingRight: 10 }}>IVA:</Text>
      <Text numberOfLines={1} style={{ flex: 1, fontSize: 15, fontWeight: "bold" }}>{(invoice_data.reduce((total, current) => total + current.price * current.total * ((100 + current.vat) / 100 - 1), 0).toFixed(2) + "€").padStart(7, " ")}</Text>
    </View>
    <View style={{ height: 30, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <Text numberOfLines={1} style={{ flex: 5, textAlign: "right", paddingRight: 10 }}>Total:</Text>
      <Text numberOfLines={1} style={{ flex: 1, fontSize: 15, fontWeight: "bold" }}>{(invoice_data.reduce((total, current) => total + current.price * current.total * (1 + current.vat / 100), 0).toFixed(2) + "€").padStart(7, " ")}</Text>
    </View>
  </ScrollView>
}
const styles = StyleSheet.create({
});
export default InvoiceView;