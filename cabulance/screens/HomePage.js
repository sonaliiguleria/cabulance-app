import React from 'react';
import { Text, View, Button, StyleSheet, Image,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TextInput } from 'react-native-gesture-handler';
// Initial Home Page 

class HomeScreen extends React.Component {
  static navigationOptions={
    title: "Cabulance",
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
       
        <View style={styles.container}>
        <View style={styles.logoContainer}>
           <Image
              style={styles.logo}
              source={require('../images/cab.jpg')}
           />
           <Text style={styles.title}>Choose required Portal</Text>
        </View>
          <View style={styles.buttonStyle}>
          <Button color='#9e0c29'
            title="I am a User"
            onPress={() => this.props.navigation.navigate('UserHome')}
          />
          </View>

          <View style={styles.buttonStyle}>

           <Button color='#9e0c29' marginBottom= '50'
            title="I am a Driver"
            onPress={() => this.props.navigation.navigate('DriverDetails')}
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
      
      marginBottom:30,
      paddingHorizontal:30,
      marginTop:10,
      justifyContent: 'center',
      color:'#9e0c29'
      
    },
    input: {
      width: 200,
      height: 50, 
      backgroundColor: 'powderblue',
      alignItems: 'stretch',
      justifyContent: 'center',
    }
    
        
      
  });

  export default HomeScreen;