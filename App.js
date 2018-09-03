import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import WelcomeScreen from "./screens/Welcome";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingScreen";
import Icon from "react-native-vector-icons/Ionicons";

import reducer from "./reducer";
// import RepoList from './RepoList';

const client = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json"
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View style={styles.container}>
//          <RepoList/>
//         </View>ss
//       </Provider>
//     );
//   }
// }

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "HOME",
    }
  },
  Setting: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: "SETTINGS",
    }
  }
});

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "Your App",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
});
// navigationOptions:({navigation})=>{(
//   title:'YourApp',
// //   headerLeft:(
// //     <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
// //     <View>
// //       <Icon name="md-menu" size={24}></Icon>
// //     </View>
// //     </TouchableOpacity>
// //   )
//  })

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
});
const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
