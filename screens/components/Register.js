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
  CheckBox,
  Alert,
  Button,
  ScrollView,
  TouchableOpacity,  
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";



// import { createStackNavigator, createAppContainer  } from "react-navigation";
// import { CheckBox } from 'react-native-elements'


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
     
      
    };
  }

  // GetSelectedPickerItem=()=>{
 
  //   Alert.alert(this.state.PickerValueHolder);
  // }

  







  // Screen layout and its styling

  // onContactPress = () => {
  // this.props.navigation.navigate('Profile');
  // }

onRegisterPress() {
this.onContactrPress();
}


  async onRegisterPress() {
    var data = {
    fullname: this.state.fullname,  
    username: this.state.username,   
    email: this.state.email,
    password: this.state.password,
    password_confirmation: this.state.password_confirmation,

    };
   //  try {
   //    var url_string = "https://datalocal.info/mkulima/api/post.php?name="+data.name+"&email="+data.email+"&subject="+data.subject+"&message="+data.message+"";
   //    // alert(url_string);
   //   let response = await fetch(url_string,
   //    {
   //      method: "POST",
   //      headers: {
   //       "Accept": "application/json",
   //       "Content-Type": "application/json"
   //      },
   //     body: JSON.stringify(data)
   //   }
   //  );
   //   if (response.status >= 200 && response.status < 300) {
   //      alert("Posted successfully!!!");
   //   }
   // // } catch (errors) {

   //   alert(errors);
   //  } 
   
    this.props.navigation.navigate(''); 
  }


  

  render() {


    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style = {styles.text}>Create an account</Text>
         
        </View>

         <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.usernameInput.focus()}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.fullname}
                style={styles.input}
                onChangeText={fullname => this.setState({ fullname })}
              />
            </View>


            <View style={styles.window}>
              <TextInput
                placeholder="User Name"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.username}
                style={styles.input}
                onChangeText={username => this.setState({ username })}
              />
            </View>


           
            <View style={styles.window}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                style={styles.input}
                onChangeText={email => this.setState({ email })}
              />
            </View>

            <View style={styles.window}>
            <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#C0C0C0"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />
            </View>


          <View style={styles.window}>
          <TextInput
            value={this.state.password_confirmation}
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#C0C0C0"
            returnKeyType="go"
            secureTextEntry
            ref={input => (this.passwordInput = input)}
          />
          </View>

         <View style={{ flexDirection: 'column'}}>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={{marginTop: 5}}>I agree to the terms and conditions that apply.</Text>
            </View>
          </View>





            
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onRegisterPress.bind(this)}
            >
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
   
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 10
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
   MainContainer: {
   flex: 1,
   justifyContent: 'center',
   
  marginBottom: 15,
  backgroundColor: "#ffffff"
   
 },
  logo: {
    width: 350,
    height: 200
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#000000",
    fontWeight: "400"
    
  },

  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#000000",
    paddingHorizontal: 10
  },
  input1: {
    height: 100,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#000000",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#1EA1F2",
    paddingVertical: 15
  },
  button: {
    height: 50,
    backgroundColor: "#7B4040",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch",
   
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "700"
  },
   window: {
    marginBottom: 15,
    backgroundColor: "#ccc"

  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  }
});




AppRegistry.registerComponent("Register", () => Register);