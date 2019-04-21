import React from 'react';
import { Text, View, Button, Image,StyleSheet, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TextInput } from 'react-native-gesture-handler';
import SocketIOClient from 'socket.io-client';
import IP from '../constant/IP';
import { Constants, Location, Permissions } from 'expo';
import call from 'react-native-phone-call'
// User Home

class UserHomeScreen extends React.Component {
  static navigationOptions={
    title: "User Home",
    headerTintColor:'#fff',
    headerLayoutPreset: 'center',
    headerStyle:{
      backgroundColor: '#9e0c29',
      
    },
    headerTitleStyle: {
      fontWeight: 'bold',
     },
    
   };
  constructor(props){

    super(props);
    this.socket = SocketIOClient(IP);
    this.state = {
        id : "Sonali",
        destination : "",
        contactNo : "",
        driverContact: "7745847590",
        location : {},
        errorMessage : null
    }

  }

  componentWillMount(){

    this._getLocationAsync();

  }



  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("location recive" , location)
    this.setState({ location });
  };

  _call = () =>{
    call({number: this.state.driverContact, prompt:true})
  };



  _sendRequest = () =>{

    this.socket.emit('find', { id : this.state.id , destination : this.state.destination , location : {
      latitude : this.state.location.coords.latitude , longitude : this.state.location.coords.longitude
    } , 
        contactNo : this.state.contactNo , riderId : this.socket.id } );

  }


    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
                
                <View style={styles.buttonStyle}>
                    <Button color='#9e0c29'
                        title="Book a Cabulance"
                         onPress={ this._sendRequest }
                    />
                </View> 
              
                <View style={styles.buttonStyle}>
                    <Button color='#9e0c29'
                        title="Call driver"
                         onPress={ this._call }
                      />
                </View>
            
        
        
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
    },
    logoContainer:{
      alignItems:'center',
      flexGrow:0.5,
      justifyContent: 'center'
    },
    logo:{
       width: 100,
        height: 100
    },
    title: {
      color: '#9e0c29',
      marginTop: 10,
      alignItems: 'center',
      fontSize: 26
    },

    buttonStyle:{
      width:300,
      marginBottom:30,
      paddingHorizontal:30,
      marginTop:10,
      justifyContent: 'center',
      color:'#9e0c29'
      
    },
    backgroundImage:{
      flex: 1,
      resizeMode:'cover'
    },
    input: {
      width: 200,
      height: 50, 
      backgroundColor: 'powderblue',
      alignItems: 'stretch',
      justifyContent: 'center',
    }
    
        
      
  });

  export default UserHomeScreen;