/*********************************************************
* @author: Raúl Giménez Lorente
**********************************************************/
import { useCallback, useEffect, useRef, useState } from 'react';
import CONFIG from './config/config';
import { FlatList, TextInput } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function SearchPage(props){
	const[filteredData, setFilteredData] = useState("");

	const[isLoading, setIsLoading] = useState(true);

	const[data, setData] = useState(props.theproducts);


	const filterByInput = () =>{
		/*******************
		* Filter by search
		********************/
		var finalDataToShowAux = props.theproducts.filter(product=>{
			let productTitleLow = product.title.toLowerCase();
			let fDataLow = filteredData.toLocaleLowerCase()
			if(filteredData === ""){
				return product;
			}else if(productTitleLow.includes(fDataLow)){
				return product;
			}
		})
		if(filteredData !== ""){
			setData(finalDataToShowAux);
		}else{
			setData(props.theproducts);
		}
	}
	
	
	const renderItem = ({item}) => (
		<View testID={"item_" + item.id}>          
      		<Text testID={"title_" + item.id}> {item.title}</Text>
      		<Text>{item.price} €</Text>
      		<Image style={styles.image} source={{uri: item.thumbnail}}/>
			<Button testID={"button_" + item.id} title="Description" onPress={()=>props.navigation.navigate(
				'OneProduct', {	title: item.title, 
				price: item.price, 
				description: item.description})}/>
    	</View>
	);
	
	return(
		<View>
			<Text testID="catalogo">Catálogo de productos</Text>

			<TextInput style={styles.input} testID="filtro"  placeholder="Let me search that..."
			onChangeText={setFilteredData} value={filteredData}></TextInput>
			<Button testID="buscador" className="button-5" title="Search" onPress={filterByInput}></Button>
			<FlatList
				data={data}
				renderItem={renderItem}/>
				
		</View>
			
		
	);
	}
	const styles = StyleSheet.create({
		image: {
		  width:60,
		  height:60
		},
		content: {
		  height: 300,
		  display: 'grid'
		},
		input: {
			fontSize: 20,
			marginLeft: 10,
			width: "90%",
		  },
	  });