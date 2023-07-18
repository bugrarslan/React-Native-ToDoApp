import React, {useEffect, useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/main/Home";
import ListScreen from "./src/screens/list/List";
import {Button, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Dimensions} from "react-native";
import Tab from "./src/screens/tab/Tab";
import List from "./src/screens/list/List";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const App = ({navigation}) => {
  return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'} screenOptions={{headerTitle:{backgroundColor:'#FAF3F0', }}}>
              <Stack.Screen name="Home" component={HomeScreen} options={{  headerLeft: null,headerTitle: (props) => <LogoTitle {...props}/> }}/>
              <Stack.Screen name="List" component={ListScreen} options={{ headaerLeft: null, headerTitle: (props) => <LogoTitle {...props} /> }}/>
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App;

function LogoTitle() {
  return (
      <Image
          style={{width:30, height:30}}
          source={require('./src/assets/to-do-list.png')}
      />
  );
}
