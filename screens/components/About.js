import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Picker,
  Alert,
  Button,
  ScrollView,
  TouchableOpacity,  
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";


export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

     
      
    };
  }


  static navigationOptions = {
    headerStyle: {
      backgroundColor: "",
      elevation: null
    }
  };
  render() {


    return (
      <ScrollView>
      <View behavior="padding" style={styles.container}>
      <Image style={styles.logo} source={require("./natakalogo.jpg")} />
        <Text style = {styles.text}>About Nataka</Text>
       
        <Text style = {styles.text2}>Nataka is a platform for enabling citizens to speak out and say what they would like government both National and County to do for them. The platform is also designed to back promises made by public officials during elections and in the process of their administrations.
The immediate release of the platform is going to be the public demand/desire sector of the platform</Text>
       
        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 5
  },
  logo: {
  width: 330,
  height: 100
  },
  
 text: {
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold"
    
  },
   text1: {
    fontSize: 25,
    alignSelf: "flex-start",
    textAlign: "left",
    color: "#000000",
    fontWeight: "bold",
    paddingTop: 5
    
  },
    text2: {
    fontSize: 17,
    alignSelf: "flex-start",
    textAlign: "left",
    color: "#000000",
    fontWeight: "normal",
    paddingTop: 10
    
  }
});

