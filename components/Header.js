import { View, Button, Text, Image, StyleSheet } from 'react-native';

export default function Header(props) {  

  return (
    <View testID="cabecera">
      <Image  testID="logo" style={styles.image} source={require('./../assets/sun.png')} alt="logo" />
      <Text testID="mensaje">Bienvenido a la tienda de Raúl Giménez Lorente</Text>      
    </View>)
}

const styles = StyleSheet.create({
  image: {
    width:40,
    height:40,
	display: "grid"
  }
});