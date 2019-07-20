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
  
import { createStackNavigator, createTabNavigator, createAppContainer } from "react-navigation";
import Register from './Register';
import Contact from './Contact';
import NatakaFeed from './NatakaFeed';
import ForgotPassword from './ForgotPassword';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: ""
    };
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  static navigationOptions = {
    headerStyle: {
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
   
  };
     onLoginCPress = () => {
    // check fields for validations
    if (this.state.login == '' || this.state.password == '')
    {
      // alert about fields
      Alert.alert(
      'Nataka',
      'All fields are mandatory!',
      [
        {text: 'OK'},
      ]);
    }
    else
    {
    // hash the password first
    var pass_hash = md5(this.state.password);
    // get the login
    var login = this.state.login;
    // make the call to the API
    return fetch('http://162.144.151.204:9321/mymjengo/clients/login',
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode('makomeki:simiti19')
        },
        body: JSON.stringify({login: login, password: pass_hash}),
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.udaku.Error === false)
      {
        // save the client object
        global.client = responseJson.udaku.Data;
        // check if this is first login
        if (global.client[16] == true)
        {
          // show the walkthrough
          this.props.navigation.navigate('NatakaFeed');
        }
        else
        {
          // go to landing
          this.props.navigation.navigate('NatakaFeed');
        }
      }
      else
      {
        Alert.alert(
        'Nataka',
        responseJson.udaku.ResultDesc,
        [
          {text: 'OK'},
        ]);
      }
    })
    .catch((error) => {
      console.error(error);
      Alert.alert(
        'Nataka',
        error,
        [
          {text: 'OK'},
        ]);
    });
    }
  };

  onLoginVPress = () => {
    // check fields for validations
    if (this.state.login == '' || this.state.password == '')
    {
      // alert about fields
      Alert.alert(
      'Nataka',
      'All fields are mandatory!',
      [
        {text: 'OK'},
      ]);
    }
    else
    {
    // hash the password first
    var pass_hash = md5(this.state.password);
    // get the login
    var login = this.state.login;
    // make the call to the API
    return fetch('http://162.144.151.204:9321/mymjengo/vendors/login',
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode('makomeki:simiti19')
        },
        body: JSON.stringify({login: login, password: pass_hash}),
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.udaku.Error === false)
      {
        // save the client object
        global.client = responseJson.udaku.Data;
        // check if this is first login
        if (global.client[16] == true)
        {
          // show the walkthrough
          this.props.navigation.navigate('');
        }
        else
        {
          // go to landing
          this.props.navigation.navigate('');
        }
      }
      else
      {
        Alert.alert(
        'Nataka',
        responseJson.udaku.ResultDesc,
        [
          {text: 'OK'},
        ]);
      }
    })
    .catch((error) => {
      console.error(error);
      Alert.alert(
        'Nataka',
        error,
        [
          {text: 'OK'},
        ]);
    });
    }
  };


 

  // screen layout and styling
  
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("./natakalogo.jpg")} />
        
          </View>
          <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput
                placeholder="Enter Username"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.login}
                style={styles.input}
                onChangeText={login => this.setState({ login })}
              />
            </View>

            <View style={styles.window}>
              <TextInput         
                placeholder="Enter Password"
                placeholderTextColor="#C0C0C0"
                returnKeyType="go"
                secureTextEntry
                ref={input => (this.passwordInput = input)}
                value={this.state.password}
                style={styles.input}
                onChangeText={password => this.setState({ password })}
              />
            </View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onLoginCPress.bind(this)}
            >
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onLoginVPress.bind(this)}
            >
              <Text style={styles.buttonText}>SIGN IN WITH TWITTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        
      

        <TouchableHighlight style={styles.buttonCont} onPress={() => this.props.navigation.navigate('NatakaFeed')}>
            <Text style={styles.texts}>Don't have an account yet? Create one</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonCont} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.texts}>Forgot password? Click here to reset</Text>
        </TouchableHighlight>

      </View>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  logoContainer: {
    alignItems: "center",

    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
   width: 330,
  height: 100
  },
  texts:{
    color:"#000"
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch",
   
  },
  buttonContainer: {
    backgroundColor: "#1EA1F2",
    paddingVertical: 15,
    flex: 1,
    margin:5
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#1EA1F2",
    paddingVertical: 15,
    padding: 20,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 20,
    marginLeft: 20,
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#000",
    paddingHorizontal: 10
  },
  window: {
    marginBottom: 5,
    backgroundColor: "#ffffff"

  },
  buttonCont: {
  justifyContent: 'center',
  alignItems: 'center',
  margin:3
  },
  
});
const RootStack = createStackNavigator({
  Login: { screen: Login },
  Contact: { screen: Contact },
  NatakaFeed: { screen: NatakaFeed,
  navigationOptions: {
    header: null,
  },},
  Register: { screen: Register },
  ForgotPassword: { screen: ForgotPassword },

 
});

const App = createAppContainer(RootStack);

export default App;

// AppRegistry.registerComponent("Login", () => Login);
