/*********************************************************
* @author: Raúl Giménez Lorente
**********************************************************/
import { useRoute } from "@react-navigation/native";
import React from "react";
import {Text, Button, View } from 'react-native';


export default function OneProduct({route, navigation}){
	route=useRoute();
	const {title, price, description} = route.params;
	
	
	return(<View >
		<Text testID="detalle">{title}</Text>
		<Text >{price}</Text>
		<Text >{description}</Text>
		<Button testID="volver" title="Back"
		onPress={()=>navigation.goBack()}></Button>
	</View>
				
	
				)
}