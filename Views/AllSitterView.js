
import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
import Location from '../Components/Location';
import Filter from '../Components/Filter';
import SitterItem from '../Components/SitterItem';
function AllSitterView({navigation}) {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "stretch" }}>
      <Location />
      <SitterItem
        name="André Patacas"
        img_uri="http://148.63.171.198:90/img/team/01.jpg"
        description="Cuidador especialista em robôs assassinos"
        stared={true}
        price={15}
        stars_initial={527}
        stared_initial
        recommended
        navigation={navigation}
      />
      <SitterItem
        name="Denis Yamunaque"
        img_uri="http://148.63.171.198:90/img/team/02.jpg"
        description="Cuidador especialista em gatos"
        price={7}
        stars_initial={92}
        navigation={navigation}
      />
      <SitterItem
        name="Luísa Amaral"
        img_uri="http://148.63.171.198:90/img/team/03.jpg"
        description="Cuidador especialista em cavaliers"
        price={12}
        stars_initial={240}
        recommended
        navigation={navigation}
      />
      <SitterItem
        name="Pedro Loureiro"
        img_uri="http://148.63.171.198:90/img/team/04.jpg"
        description="Cuidador especialista em cães de grande porte"
        price={13}
        stars_initial={220}
        stared
        navigation={navigation}
      />
    </ScrollView>
  );
}

export default AllSitterView;