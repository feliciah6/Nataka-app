import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button
} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome' 
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'; 
import Contact from './Contact'; 
import About from './About'; 


class Nataka extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Lorem ipsum dolor sit malet color fen bi patch muragare.",                  time:"1 days a go"},
        {id:2, title: "Sit amet, consectetuer mi amor alba and ecven me",             time:"2 minutes a go"} ,
        {id:3, title: "Dipiscing elit. Aenean  isjddnbbk  jjdbd dnd",            time:"3 hour a go"}, 
        {id:4, title: "Commodo ligula eget dolor aldont pi makufacha andi derty.",         time:"4 months a go"}, 
        {id:5, title: "Aenean massa. Cum sociis pliasing sjjdkks  judtify content center",           time:"5 weeks a go"}, 
        {id:6, title: "Natoque penatibus et magnis react native open source code",        time:"6 year a go"}, 
        {id:7, title: "Dis parturient montes, nascetur github is where i push my code.",    time:"7 minutes a go"}, 
        {id:8, title: "Ridiculus mus. Donec quam lavey de la lavey",          time:"8 days a go"},
        {id:9, title: "Felis, ultricies nec, pellentesque portsche engeden my ba dream car", time:"9 minutes a go"},
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/android/75/e74c3c/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>78</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/metro/75/3498db/administrator-male.png'}}/>
                        <Text rkType='primary4 hintColor' style={styles.socialBarLabel}>13</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}
class DiscoverScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Discover Screen</Text>  
        </View>  
    );  
  }  
}  
class WriteScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Write Screen</Text>  
            </View>  
        );  
    }  
}  
class MessageScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Message Screen</Text>  
            </View>  
        );  
    }  
}  


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Nataka: { screen: Nataka,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View> 
                    <FontAwesome
                  name={'home'}
                  size={27}
                  style={{ color:tintColor }}
                /> 
                    </View>),  
            }  
        },  
        Discover: { screen: DiscoverScreen,  
            navigationOptions:{  
                tabBarLabel:'Discover',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <FontAwesome
                  name={'hashtag'}
                  size={27}
                  style={{ color:tintColor }}
                />  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Write: { screen: WriteScreen,  
            navigationOptions:{  
                tabBarLabel:'Write',  
                tabBarIcon: ({ tintColor }) => (  
                    <View> 
                  <FontAwesome
                  name={'pencil'}
                  size={27}
                  style={{ color:tintColor }}
                />   
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
        Message: {  
            screen: MessageScreen,  
            navigationOptions:{  
                tabBarLabel:'DM',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={27} name={'message'}/>  
                    </View>),  
            }  
        },  
    },  
    {  
      initialRouteName: "Nataka",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#1EA1F2' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  

