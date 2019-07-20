import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
 
import About from './About';
import Faq from './Faq';
import Home from './Home';
import Nataka from './Nataka';
import Tweet from './Tweet';
import Contact from './Contact';
import Settings from './Settings';

 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require("./drawer.png")}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Screen1_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Nataka,
    navigationOptions: ({ navigation }) => ({
      title: 'Nataka feed ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1EA1F2',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      title: 'About screen ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1EA1F2',
      },
      headerTintColor: '#fff',
    }),
  },
});


 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Faq,
    navigationOptions: ({ navigation }) => ({
      title: 'Faq screen',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1EA1F2',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact Screen ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1EA1F2',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen4 will be indexed here
  Third: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings screen ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#1EA1F2',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Nataka: {
    //Title
    screen: Screen1_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Nataka feed',
    },
  },
  About: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'About screen',
    },
  },

  Faq: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Faq screen',
    },
  },
  Contact: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Contact Screen',
    },
  },
  Settings: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings screen',
    },
  },
});

// bottom tab navigation begins here


const NatakaFeed =  createBottomTabNavigator({
  Tweet: {
    screen: Tweet,
    navigationOptions : {
      tabBarLabel: 'Home',
    }

  },
  Search: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'Search',
    }
  },
  Notification: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'Notification',
    }
  },
  DM: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'DM',
    }
  },
  
}, 
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      
      switch (routeName){

        case "Home":
          return <Octicons name={'home'} size={30} color={ focused ? 'rgb(29, 161, 242)':'rgb(136, 153, 166)'} />
        
        case "Search":
          return <EvilIcons name={'search'} size={35} color={ focused ?  'rgb(29, 161, 242)':'rgb(136, 153, 166)'} />
        
        case "Notification":
          return <Ionicons
                  name={'ios-notifications-outline'}
                  size={30}
                  style={{ color: focused ?  'rgb(29, 161, 242)':'rgb(136, 153, 166)' }}
                />
        
        case "DM":
          return <FontAwesome
                  name={'envelope-o'}
                  size={26}
                  style={{ color: focused ? 'rgb(29, 161, 242)':'rgb(136, 153, 166)' }}
                />
        
      }
    },
  }),


  tabBarPosition: 'bottom',
  //tabBarComponent: (props) => <CustomTabComponent {...props}/>,
  animationEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel:false,
    showIndicator:false,
    titleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    style: {
        borderWidth: 0,
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        backgroundColor: 'rgb(27, 42, 51)',
        borderColor: 'rgb(27, 42, 51)',
        shadowColor:'red',
        elevation:2
    },
    activeBackgroundColor: 'rgb(0, 79, 114)',
    inactiveBackgroundColor: 'rgb(27, 42, 51)',
    labelStyle: {
        fontSize: 14,
        color: '#fff',
        position: 'relative',
        alignSelf: 'center',

    },
    iconStyle:{
      marginBottom:5,
      marginTop:5
    },
    tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    indicatorStyle: {
      backgroundColor: 'transparent',
  },
},
});
 
export default createAppContainer(DrawerNavigatorExample);