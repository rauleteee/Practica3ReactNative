
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CONFIG from './components/config/config';
import {mockdata} from "./components/constants/products";

import Header from './components/Header';
import OneProduct from './components/OneProduct';
import SearchPage from './components/SearchPage';
import Loading from './components/Loading';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const SERVER_URL = CONFIG.server_url;
  
  const download = async() =>{
    let products;
    if(CONFIG.use_server){
      try {
        const res = await fetch(SERVER_URL);
        products = await res.json();
        //console.log(products);
        await setData(products.products)
      } catch (e) {
        //alert("No se ha podido recuperar la información.");
      }
    }
    else{
      await setData(mockdata.products);
    }

  }
  useEffect(() => {
    async function fetchData() {
      await download();		
			setTimeout(()=>{
				setLoading(false);
			},500);		
    }

    fetchData();
  }, []);
  
  const searchPage = () =>{
    const navigation = useNavigation();
    return (
      <View>
        <SearchPage theproducts={data} navigation={navigation}/>
      </View>
    )
  }
  const oneProduct = () =>{
    const navigation = useNavigation();
    return (
      <View>
        <OneProduct theproducts={data} navigation={navigation}/>
      </View>
    )
  }
  const loadingPage = () =>{
    
    return (
      <View>
        <Loading/>
      </View>
    )
  }
  return (
    
    
    <NavigationContainer>
      <Header/>
      
    <Stack.Navigator>
       
   {loading?<Stack.Screen name="Loading" component={loadingPage}/>:<Stack.Screen name="SearchPage"  component={searchPage}/>} 
    <Stack.Screen name="OneProduct" component={oneProduct}/>
          
    </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
