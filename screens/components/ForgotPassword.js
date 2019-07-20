import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

// import { createStackNavigator, createAppContainer } from "react-navigation";
// import Login from './Login';


export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
      
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#fff",
      elevation: null,
    },
    headerTitleStyle: {
      color: '#000',
    },
    headerTitleStyle: {
      textAlign:'left', 
      alignSelf:'center',
      flex:1
    },
    headerTintColor: '#000',
  };
async onForgotPasswordPress() {
  console.log(email);
  await AsyncStorage.setItem("email", email);
}

  onForgotPasswordPress() {
    this.props.navigation.navigate("Login");
      
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.text}>Please provide us with your email for us to send you a link to reset your password.</Text>
      <View style={styles.window}>
        <TextInput
          placeholder="Please enter your email address"
          placeholderTextColor="#C0C0C0"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        </View>
        


        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onForgotPasswordPress.bind(this)}
        >
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: 10
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#000000",
    padding: 10,
    fontWeight: "400"
    
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  window: {
    marginBottom: 15,
    backgroundColor: "#ccc"

  },
  buttonContainer: {
    backgroundColor: "#1EA1F2",
    paddingVertical: 15
  },

  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
});
AppRegistry.registerComponent("ForgotPassword", () => ForgotPassword);

// const RootStack = createStackNavigator({
//   ForgotPassword: { screen: ForgotPassword },
//   Login: { screen: Login },
 

 
// });

// const App = createAppContainer(RootStack);

// export default App;
