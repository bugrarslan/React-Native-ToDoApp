import React, {useState, useEffect} from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Dimensions} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tab from "../tab/Tab";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListScreen = (props) => {
  const [storageDataList, setStorageDataList] = useState([])

  const getTodos = async () => {
    try {
      const data = await AsyncStorage.getItem("Todos");
      const output = JSON.parse(data);
      setStorageDataList(output)
    } catch (error) {
      console.log(error)
    }
  }

  const handleResponse = async () => {
    try {
      const jsonValue = JSON.stringify(storageDataList)
      await AsyncStorage.setItem('Todos', jsonValue)
      alert('Data is deleted');
    } catch (error) {
      console.log(error);
    }
  }

  const removeItem = (count) => {
    storageDataList.splice(count, 1);
    handleResponse()
    getTodos()
  }

  useEffect(() => {
    getTodos();
  }, [])


  return(
        <SafeAreaView style={{alignItems:'center', backgroundColor:'#FAF3F0'}}>
          <View style={{alignItems:'center', maxHeight:'93%'}}>
            <View style={{ width:windowWidth, height:windowHeight/20}}/>

            <View style={{flexDirection:'row',justifyContent:'space-around'}}>

              <TouchableOpacity style={{alignItems: 'center', backgroundColor: '#D4E2D4', padding: 10, minWidth:'40%', borderRadius:10}}>

                <Text>Yapılacaklar</Text>
              </TouchableOpacity>

              <View style={{ width:windowWidth/10}}/>

              <TouchableOpacity style={{alignItems: 'center', backgroundColor: '#D4E2D4', padding: 10, minWidth:'40%', borderRadius:10}}>

                <Text>Yapılanlar</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width:windowWidth, height:windowHeight/50}}/>

            <ScrollView
                contentContainerStyle={{alignItems:'center'}}
                style={{height:windowHeight/2,width: windowWidth/1.1, backgroundColor:'#FFCACC', borderRadius:10, paddingTop:7}}>

              {/*<View style={{width:windowWidth, height:windowHeight, alignItems:'center', marginTop:7, marginBottom:110, paddingHorizontal:15}}>*/}

                {storageDataList.map((item, index) => {
                  return(

                    <View style={{backgroundColor:'#DBC4F0', width:'95%', height:40,borderRadius:5,marginBottom:7, flexDirection:'row', justifyContent:'space-between', paddingTop:3}}>


                      <View>
                        <Text style={{marginLeft:15}} key={index}>{item}</Text>
                      </View>


                      <TouchableOpacity style={{backgroundColor:'#D4E2D4',width:35,marginRight:5, height:30,alignItems:'center', borderRadius:10}} onPress={() => {
                        removeItem(index)
                      }}>

                        <Text>sil</Text>
                      </TouchableOpacity>
                    </View>

                  )
                })}
              {/*</View>*/}
            </ScrollView>
            <View style={{height:windowHeight/10}}/>
          </View>
          <View>
            <Tab navigation={props?.navigation}/>
          </View>
        </SafeAreaView>
  )

}

export default ListScreen;
