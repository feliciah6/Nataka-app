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


import Login from './Login';
import { createStackNavigator, createAppContainer  } from "react-navigation";


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
     
      
    };
  }

  // GetSelectedPickerItem=()=>{
 
  //   Alert.alert(this.state.PickerValueHolder);
  // }

  







  // Screen layout and its styling

  // onContactPress = () => {
  // this.props.navigation.navigate('Profile');
  // }

onContactrPress() {
this.onContactrPress();
}


  async onContactPress() {
    var data = {
    name: this.state.name,   
    email: this.state.email,
    subject: this.state.subject,
    message: this.state.message,

    };
    try {
      var url_string = "https://datalocal.info/mkulima/api/post.php?name="+data.name+"&email="+data.email+"&subject="+data.subject+"&message="+data.message+"";
      // alert(url_string);
     let response = await fetch(url_string,
      {
        method: "POST",
        headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
        },
       body: JSON.stringify(data)
     }
    );
     if (response.status >= 200 && response.status < 300) {
        alert("Posted successfully!!!");
     }
   } catch (errors) {

     alert(errors);
    } 
   
    this.props.navigation.navigate('Login'); 
  }


  

  render() {


    return (
      <ScrollView>
      <View behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style = {styles.text}>Get in touch with us:</Text>
         
        </View>

         <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.name}
                style={styles.input}
                onChangeText={name => this.setState({ name })}
              />
            </View>


           
            <View style={styles.window}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.subjectInput.focus()}
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
                placeholder="subject"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.subjectInput.focus()}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.subject}
                style={styles.input}
                onChangeText={subject => this.setState({ subject })}
              />
            </View>


          <View style={styles.window}>
          <TextInput
            value={this.state.message}
            keyboardType = 'default'
            onChangeText={message=> this.setState({ message  })}
            ref={input => (this.messageInput = input)}
            value={this.state.message}
            maxLength={100}
            style={styles.input1}
            placeholder="Write your message here"
            placeholderTextColor="#C0C0C0"
            returnKeyType="next"
            onSubmitEditing={() => this.messageInput.focus()}
            multiline={true}
            numberOfLines={5}
          />
          </View>



            
            
   

           

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onContactPress.bind(this)}
            >
              <Text style={styles.buttonText}>Submit</Text>
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

// const RootStack = createStackNavigator({
//   Contact: { screen: Contact },
//   Login: { screen: Login },

 
// });

// const App = createAppContainer(RootStack);

// export default App;


AppRegistry.registerComponent("Contact", () => Contact);