import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native';

import Login from './screens/components/Login';
import NatakaFeed from './screens/components/NatakaFeed';
import Register from './screens/components/Register';
import ForgotPassword from './screens/components/ForgotPassword';


import { createStackNavigator, createAppContainer } from "react-navigation";




export default class Home extends Component<{}> {

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#014422" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}



const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    title: 'Home Activity',
    headerLeft: null
    
  },
   Register: {
    screen: Register,
    headerLeft: null
    
  },
  ForgotPassword: {
    screen: ForgotPassword,
    headerLeft: null
    
  },
  NatakaFeed: {
    screen: NatakaFeed,
    headerLeft: null
    
  },

  Login: {
    screen: Login,
    headerLeft: null
   
   }
  });

const App = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
   logo2: {
    width: 150,
    height: 80
  }
});