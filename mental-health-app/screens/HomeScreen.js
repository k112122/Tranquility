import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeScreen extends Component {
  constructor(){
    super();
    this.state ={
      text: ''
    }
  }
render() {
  return (
<View> 
      <SafeAreaView style ={styles.droidSafeArea}/>

<ImageBackground source={require("../assets/background.jpeg")}style={styles.backgroundImage}> 

 <Header
          backgroundColor={'lightskyblue'}
          centerComponent={{
            text: 'Tranquility',
            style: { color: 'mintcream', fontSize: 30 },
          }}
        />

<Image source={require("../assets/logo.png")}style={styles.logo}/>
<Text style={styles.greetingText}> Hello, </Text>

          <TouchableOpacity 
          style={styles.button1} onPress={()=> this.props.navigation.navigate("Reminders")}>
            <Text style={styles.buttonText}> Reminders </Text>
          </TouchableOpacity>

<TouchableOpacity 
          style={styles.button2} onPress={()=> this.props.navigation.navigate("AboutMe")}>
            <Text style={styles.buttonText}> About This App </Text>
          </TouchableOpacity>

<TouchableOpacity
            style={[styles.button1,{backgroundColor: "palevioletred"}]} 
   onPress={()=> this.props.navigation.navigate("PanicButton")}>
            <Text style={styles.buttonText}> Panic Button </Text>
          </TouchableOpacity>
        

          

<TouchableOpacity
            style={[styles.button3,{backgroundColor: "mediumturquoise"}]} 
   onPress={()=> this.props.navigation.navigate("JournalScreen")}>
            <Text style={styles.buttonText}> Journalling </Text>
          </TouchableOpacity>

</ImageBackground>
</View> 
  )
}
}

const styles = StyleSheet.create({
  logo:{

width: 150,
height: 150,
marginLeft: 150,
marginRight: 10,
marginTop: 50,
  },

backgroundImage:{
    resizeMode: 'contain',
height: 1000

},
 

  greetingText:{
    fontSize: 40,
    marginTop: 50,
    marginLeft: 50

  },

button1:{
    justifyContent : 'center',
    alignSelf : 'left',
    marginLeft: 20,
    borderWidth : 2,
    borderRadius : 30,
    marginTop:80,
    width : 150,
    height:200,
    backgroundColor: "plum"
  },

  button2:{
justifyContent : 'center',
    alignSelf : 'right',
    marginLeft: 250,
  position: 'absolute',
    bottom: 335,
    borderWidth : 2,
    borderRadius : 30,
    width : 150,
    height:200,
    backgroundColor: "lightblue",
  },
  button3:{
justifyContent : 'center',
    alignSelf : 'right',
    marginLeft: 250,
  position: 'absolute',
    bottom: 50,
    borderWidth : 2,
    borderRadius : 30,
    width : 150,
    height:200,

  },

  buttonText : {
    textAlign : 'center',
    color : 'white'
  },

  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

  
})