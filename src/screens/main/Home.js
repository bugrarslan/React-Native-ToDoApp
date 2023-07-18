import React, {useEffect, useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tab from "../tab/Tab";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = (props) => {
  const [inputBoxValue, setInputBoxValue] = useState('')
  const [storageDataList, setStorageDataList] = useState([])

  const handleResponse = async () => {
    try {
      storageDataList.push(inputBoxValue)
      const jsonValue = JSON.stringify(storageDataList)
      await AsyncStorage.setItem('Todos', jsonValue)
      setInputBoxValue('')
      alert('Data is added');
    } catch (error) {
      console.log(error);
    }
  }

  const getTodos = async () => {
    try {
      const data = await AsyncStorage.getItem("Todos");
      const output = JSON.parse(data);
      setStorageDataList(output)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return(
      <SafeAreaView style={{alignItems:'center', backgroundColor:'#FAF3F0', flex:1}}>
        <View style={{ width:windowWidth, height:windowHeight/12}}/>
        <View style={{minHeight:'85%'}}>
          <TextInput
              placeholder={'type here'}
              onChangeText={value => setInputBoxValue(value)}
              style={{height: 40, width:windowWidth/1.1, margin: 12, borderRadius:10, borderWidth: 1, padding: 10,backgroundColor:'#FFCACC'}}/>
          <TouchableOpacity style={{alignItems: 'center', backgroundColor: '#D4E2D4', padding: 10, minWidth:'40%', borderRadius:10}}
                            onPress={() => handleResponse()}>
            <Text>Kaydet</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Tab navigation={props?.navigation}/>
        </View>



      </SafeAreaView>
  )
}

export default HomeScreen;
