import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Dimensions} from "react-native";
import FastImage from 'react-native-fast-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = ({navigation}) => {

  return (
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{backgroundColor:'#D4E2D4', height:windowHeight, width:windowWidth/2, alignItems:'center', paddingTop:8}} onPress={()=> navigation.navigate('Home')}>
          <Image
              style={{width:30, height:30}}
          source={require('../../assets/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#D4E2D4', height:windowHeight, width:windowWidth/2, alignItems:'center', paddingTop:8}}  onPress={()=> navigation.navigate('List')}>
          <Image
              style={{width:30, height:30}}
              source={require('../../assets/list.png')}
          />
        </TouchableOpacity>
      </View>
  )
};

export default Tab;
