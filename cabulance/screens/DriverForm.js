import React from 'react';
import { Text, View, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TextInput } from 'react-native-gesture-handler';
// Driver's Form

class DriverDetailsScreen extends React.Component {
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
        
        <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.title}>Enter Driver Details</Text>
        </View>
        <View>
          <TextInput
             style={styles.input}
             placeholder="Enter PIN Code"
             placeholderTextColor= 'rgb(255,255,255)'
             keyboardType="email-address"
             returnKeyType="next"
             autoCorrect={false}
             onSubmitEditing={()=> this.refs.txtPassword.focus()}
  
          />
          <TextInput
             style={styles.input}
             placeholder="Enter Password"
             placeholderTextColor= 'rgb(255,255,255)'
             secureTextEntry={true}
             returnKeyType="go"
             autoCorrect={false}
             ref={"txtPassword"}
  
  
          />
          <View style={styles.buttonStyle}>
             
             <Button color='#9e0c29'
                 title="Log In"
                  onPress={() => this.props.navigation.navigate('DriverHome')}
              />
          </View>
  
            
         </View>
         </KeyboardAvoidingView>

        
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
      marginLeft: 70,
    },

    buttonStyle:{
      
      marginBottom:30,
      paddingHorizontal:50,
      marginTop:10,
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


  export default DriverDetailsScreen;