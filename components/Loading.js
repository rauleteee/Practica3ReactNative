import { StyleSheet } from "react-native";
import { View, Text } from "react-native";


export default function Loading(props) {  

  return (
    <View>
      <Text testID="loading">Cargando...</Text>
    </View>)
}

const styles = StyleSheet.create({
  image: {
    width:40,
    height:40,
	display: "grid"
  }
});

