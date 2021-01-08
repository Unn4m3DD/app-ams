
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';
import { UserDataContext } from '../Contexts/UserDataContext';
const { width: g_width, height: g_height } = Dimensions.get("window");

function PerFoodView({ navigation, route }) {
  const [currentStars, setCurrentStars] = React.useState(0);
  const { userData, setUserData } = React.useContext(UserDataContext)
  const data = {
    stared: route.params.stared,
    price: route.params.price,
    vat: route.params.vat,
    img_uri: route.params.img_uri,
    name: route.params.description,
    stars_initial: route.params.stars_initial,
    stared_initial: route.params.stared_initial,
    recommended: route.params.recommended,
  }
  return <>
    {data.recommended && <TouchableOpacity activeOpacity={.90} style={{
      position: "absolute", top: 10, left: 0,
      zIndex: 1,
      width: "70%",
      height: 30,
      paddingHorizontal: 10,
      backgroundColor: "#49A05E",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
    }}>
      <AntDesign name="star" size={24} color="white" />
      <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10 }}>Recomendado Pelo Seu Veterinário</Text>
    </TouchableOpacity>}

    <ScrollView contentContainerStyle={{ margin: 20 }}>
      <View style={{
        flexDirection: "row",
        alignItems: "center"
      }}>
        <View style={{
          height: 150,
          width: 150,
          borderRadius: 75,
          backgroundColor: "#ddd",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Image source={{ uri: data.img_uri }} style={{ height: 130, width: 130, borderRadius: 75 }} />
        </View>
        <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: "bold", marginRight: 180, marginLeft: 10 }}>{data.name}</Text>
      </View>
      <Text style={{ marginTop: 10, fontSize: 20, }}>
        Informação Extra
      </Text>
      <Text style={{ marginTop: 15, fontSize: 18 }}>
        Informação Nutricional
      </Text>
      <View style={styles.table_item}>
        <Text>Proteínas:</Text><Text>30.0%</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Gorduras:</Text><Text>22.0%</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Sais minerais:</Text><Text>6.1%</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Fibra bruta:</Text><Text>1.8%</Text>
      </View>
      <Text style={{ marginTop: 15, fontSize: 18 }}>
        Informação Embalagem
      </Text>
      <View style={styles.table_item}>
        <Text>Peso Liquido:</Text><Text>10kg</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Preço Unidade:</Text><Text>{data.price}€</Text>
      </View>
      <View style={styles.table_item}>
        <Text>IVA:</Text><Text>{data.vat}%</Text>
      </View>
      <View style={styles.table_item}>
        <Text>Preço Final:</Text><Text>{(data.price * (1 + data.vat / 100)).toFixed(2)}€</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Dê-nos a sua opinião</Text>
        <View style={{ flexDirection: "row" }}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return <TouchableOpacity key={index} onPress={() => {
              setCurrentStars(item)
            }}>
              {currentStars >= item && <AntDesign style={{ position: "absolute" }} name="star" size={45} color="#FFEE00" />}
              <AntDesign name="staro" size={45} color="#ccc" >
              </AntDesign>
            </TouchableOpacity>
          })}
        </View>
        <TouchableOpacity activeOpacity={.90} style={{
          height: 30,
          paddingHorizontal: 10,
          marginVertical: 20,
          backgroundColor: "#bf1919",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 15,

        }} onPress={() => { setCurrentStars(0) }}>
          <Text style={{ fontWeight: "bold", color: "#fff" }}>Desmarcar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <TouchableOpacity activeOpacity={.90} style={{
      position: "absolute", bottom: 20, right: 0,
      height: 50,
      paddingHorizontal: 10,
      backgroundColor: `#37c2d8${route.params.sold_out ? "88" : "ff"}`,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    }}
      onPress={() => {
        if (!route.params.sold_out) return
        const tmp_user_data_cart = JSON.parse(JSON.stringify(userData.cart))
        for (let i = 0; i < tmp_user_data_cart.length; i++) {
          if (tmp_user_data_cart[i].name == data.name) {
            tmp_user_data_cart[i].total++
            setUserData({ ...userData, cart: tmp_user_data_cart })
            navigation.navigate('AllFoodView')
            return
          }
        }
        tmp_user_data_cart.push({ name: data.name, price: data.price, total: 1, vat: 23 })
        setUserData({ ...userData, cart: tmp_user_data_cart })
        navigation.navigate('AllFoodView')
      }}
    >
      <AntDesign name="shoppingcart" size={30} color="white" />
      <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10, fontSize: 18 }}>{route.params.sold_out ? "Sem Stock" : "Adicionar ao Carrinho"}</Text>
    </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  table_item: {
    height: 23,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  }
});
export default PerFoodView;