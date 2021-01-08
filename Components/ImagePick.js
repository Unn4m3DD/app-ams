import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


function ImagePick({ setExternalImage }) {
  const [image, setImage] = React.useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setExternalImage(result.uri)
      setImage(result.uri);
    }
  };
  return <TouchableOpacity activeOpacity={.8}
    style={{
      height: 130,
      width: 130,
      borderRadius: 75,
      backgroundColor: "#ddd",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 30
    }}
    onPress={pickImage}
  >

    {image && <Image source={{ uri: image }}
      style={{
        height: 110,
        width: 110,
        borderRadius: 75,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    />}
    {!image &&
      <View
        style={{
          height: 110,
          width: 110,
          borderRadius: 75,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="camerao" size={70} color="black" />
      </View>
    }
  </TouchableOpacity>
}

export default ImagePick