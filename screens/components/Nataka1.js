import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,    
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View,
  Alert,
  TouchableHighlight,
  ScrollView // Container component
} from "react-native";
  
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import DrawerContainer from './DrawerContainer';
import LoadingScreen from './Loading';
  axios.get(`https://randomuser.me/api/?results=10`)


const  AppStack = createDrawerNavigator(
  { 
    // Home: () => <View style={{flex:1}}><Text>The Home</Text></View>,
    Profile: () => <View style={{flex:1}}><Text>Profile Page</Text></View>,
  },
  {
    contentComponent: ({navigation}) => <DrawerContainer  navigation={navigation}/>
  }
);


export default AppNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

// const App = createAppContainer(AppStack);

// export default App;


AppRegistry.registerComponent("AppNavigator", () => AppNavigator);

