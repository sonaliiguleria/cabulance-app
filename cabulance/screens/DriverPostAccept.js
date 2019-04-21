import React from 'react';
import { Text, View, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TextInput } from 'react-native-gesture-handler';
import openMap from 'react-native-open-maps';

class DriverPostAcceptScreen extends React.Component {


    state = {
        latitude : 19.112,
        longitude : 72.8275
    }

    componentDidMount(){

        let location = this.props.navigation.getParam( 'location' , {
            latitude : 19.112,
            longitude : 72.8275
        } )

        this.setState({ latitude : location.latitude , longitude : location.longitude })

    }

    _goToHospital = () =>{

        openMap( { end : `${this.state.latitude},${this.state.longitude}` , travelType : 'drive' } )

    }
    static navigationOptions={
      title: "Driver's Home Page",
      headerTintColor:'#fff',
      headerLayoutPreset: 'center',
      headerStyle:{
        backgroundColor: '#9e0c29',
        
      },
      headerTitleStyle: {
        fontWeight: 'bold',
       },
      
     };


    render() {
      return (
        <View >
          <Text style={styles.title}>For Patient's Pickup Location</Text>
          <View style={styles.buttonStyle}>
             <Button color="#9e0c29"
                title="OPEN MAP"
                onPress={ this._goToHospital }
              />
          </View>
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 0.8,
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
      marginTop: 120,
      alignItems: 'center',
      fontSize: 26,
      marginLeft: 40,
    },

    buttonStyle:{
      height:70,
      marginBottom:30,
      paddingHorizontal:50,
      marginTop:100,
      justifyContent: 'center',
      color:'#9e0c29'
      
    },
    input: {
      width: 300,
      height:50,
      marginBottom:30,
      marginTop:10,
      backgroundColor: '#bab8b8',
      paddingHorizontal:10,
      justifyContent: 'center',
      alignItems:'center',
      marginLeft: 60
    }
    
        
      
  });

  export default DriverPostAcceptScreen;