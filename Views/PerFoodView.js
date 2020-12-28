
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';
const { width: g_width, height: g_height } = Dimensions.get("window");

function PerFoodView({navigation}) {
  const [currentStars, setCurrentStars] = React.useState(0);
  const data = {
    stared: true,
    price: 5.52,
    img_uri: "https://www.petstock.com.au/images/cache/product_feature/images/products/5f8f80e3d51881.37176137.jpeg",
    description: "Ração de Frango para Cão Adulto Médio",
    stars_initial: 212,
    stared_initial: true,
    recommended: true
  }
  return <>
    <TouchableOpacity activeOpacity={.90} style={{
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
    </TouchableOpacity>

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
        <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: "bold", marginRight: 180, marginLeft: 10 }}>{data.description}</Text>
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
        <Text>Preço Unidade:</Text><Text>45.32€</Text>
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
      backgroundColor: "#37c2d8",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    }}
      onPress={() => navigation.navigate('AllFoodView')}
    >
      <AntDesign name="shoppingcart" size={30} color="white" />
      <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 10, fontSize: 18 }}>Adicionar ao Carrinho</Text>
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