import React from 'react';
import { Text, View, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TextInput } from 'react-native-gesture-handler';

// Screens
import HomeScreen from './screens/HomePage';
import DriverDetailsScreen from './screens/DriverForm';
import UserHomeScreen from './screens/UserHome';
import DriverHomeScreen from './screens/DriverHome';
import DriverPostAcceptScreen from './screens/DriverPostAccept';



const AppNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  DriverDetails: DriverDetailsScreen,
  UserHome: UserHomeScreen,
  DriverHome: DriverHomeScreen,
  DriverPostAccept : DriverPostAcceptScreen
  },
  {
    initialRouteName: "Home"
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
    paddingVertical: 50,
    fontSize: 14,
    
  },
  input: {
    width: 200,
    height: 50, 
    backgroundColor: 'powderblue',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

export default createAppContainer( AppNavigator);
