import React from 'react';
import { Text, View, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TextInput } from 'react-native-gesture-handler';
import SocketIOClient from 'socket.io-client';
import AwesomeAlert from 'react-native-awesome-alerts';
// Driver's Home

class DriverHomeScreen extends React.Component {

  constructor(props){

    super(props);
    this.socket = SocketIOClient(IP);
    this.state = {
        id : "Rutuja",
        contactNo : "985575414",
        clientName : "",
        clientPhone : "",
        clientSocketId : "",
        requested : false,
        location : {}
    }

    this.socket.on('request' , (msg)=>{

      console.log("getting requests from" , msg)
      this.setState({
        clientName : msg.id,
        clientPhone : msg.contactNo,
        clientSocketId : msg.riderId,
        requested : true,
        location : {
          latitude : msg.location.latitude,
          longitude : msg.location.longitude
        }
      })

    })

  }

    showAlert = () => {
      this.setState({
        requested: true
      });
    };
  
    hideAlert = () => {
      this.setState({
        requested: false
      });
    };
 

  _ready = () =>{

    this.socket.emit('ready', { id : this.state.id , driverId : this.socket.id })

  };

  _acceptRequest = () =>{

    let st = this.state;
    let driverId = st.id , id = st.clientSocketId, contactNo = st.contactNo;

    this.socket.emit('sendAcception', { driverId , id , contactNo })

    this.props.navigation.navigate( 'DriverPostAccept' , { location : this.state.location } );

  };
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
          <View >
             <Text style={styles.title}> Driver's Home Page</Text>
          </View>


          {
            ! this.state.requested &&
          <View>
            <View style={styles.buttonStyle}>
               <Button color="#9e0c29"
                  title="I'm Ready"
                  onPress={this._ready}
                  on
                />
            </View>

           
            

          </View>

          }




          <AwesomeAlert style={color="#9e0c29"}
                    show={this.state.requested}
                    showProgress={false}
                    title="Shreya Gajabe"
                    message={ `${this.state.clientName} is requesting...` }
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, Reject"
                    confirmText="Yes, Accept"
                    confirmButtonColor="#9e0c29"
                    onCancelPressed={() => {
                      this.hideAlert();
                    }}
                    onConfirmPressed={this._acceptRequest}
           />


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
      marginLeft: 70,
    },

    buttonStyle:{
      
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
export default DriverHomeScreen;  