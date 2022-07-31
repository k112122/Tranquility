import React, { Component } from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, TextInput, Alert, ToastAndroid, SafeAreaView, Platform, StatusBar} from 'react-native';
import { Header } from 'react-native-elements';
import { Switch } from 'react-native-paper';
import Reminders from './Reminders';
import axios from 'axios'
import { Audio } from 'expo-av';
import { RFValue } from 'react-native-responsive-fontsize';


export default class Notifications extends Component {
  constructor(){
    
    super()
    this.state = { 
      time: '',
      hour:'',
      response:'',
      counter: 0,
    }

 
  this.date = new Date(). getDate(); //To get the Current Date.
 this.hours = new Date().getHours();
 this.min = new Date().getMinutes();
 this.sec = new Date().getSeconds();
 console.log("Date "+this.date)
 console.log("Hours "+this.hours)
 console.log("DateSecond "+this.sec)
  }
  
     displayAlert = () => {
    alert('Time to check your reminders!');
  };

  componentDidMount(){
     setInterval(this.playSound,7200000);
      setInterval(this.getCounter,7200000);
      
  }
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };
getCounter= async()=>{
  
  this .setState({
    counter:this.state.counter + 1,
 
  })
ToastAndroid.show('Study time!', ToastAndroid.SHORT);          

}
 getTime = async() => {
  //var hour = {}
    // write code to fetch time from API
    
    axios.get ("https://worldtimeapi.org/api/timezone/Asia/Kolkata").then(response=>{
   //  this.setState({hour:response.datetime})
 
   })
.catch(error=> console.error(error))

 }

  render() {
     const text1=this.props.navigation.getParam('text1');
     const text2=this.props.navigation.getParam('text2');
     const text3=this.props.navigation.getParam('text3');
     const text4=this.props.navigation.getParam('text4');
     const text5=this.props.navigation.getParam('text5');
    const response = this.state.response;

    return (
      <View style={styles.container}>
            <SafeAreaView style ={styles.droidSafeArea}/>

        <Header
          backgroundColor={'steelblue'}
          centerComponent={{
            text: 'Reminders List',
            style: { color: '#fff', fontSize: 25 },
          }}
        />

        <Text style={styles.headerText}>Your reminders are:</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>1. {text1}</Text>
        </View>

         <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>2. {text2}</Text>
        </View>

         <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>3. {text3}</Text>
        </View>

         <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>4. {text4}</Text>
        </View>

         <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>5. {text5}</Text>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
        <Text style={styles.button}>
        Back to Menu
        </Text>
        </TouchableOpacity>
        
         <Header
          backgroundColor={'steelblue'}
          marginTop={25}
          centerComponent={{
            text: 'Timer',
            style: { color: '#fff', fontSize: 25, },
          }}
        />

         <Text style={{fontSize:35, marginTop: 50, marginLeft: 170 }}>
        {this.state.counter}
        </Text>
<Text style = {{fontSize:30,fontFamily:'bold',marginLeft:120,
marginTop:50}}> Time: {this.hours}:{this.min}</Text>

<Text 
style = {{marginLeft:150,color:'black',width:60,height:60,fontSize:40}}> {this.response} </Text>
<View>
 
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
 resizeMode: 'contain',
    height: 2000,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '450',
    marginTop: 20,
    marginBottom: 15,
  },
  bulletContainer: {
    fontSize: 15,
    borderColor: '#c2c2c2',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10
  },
  bulletText: {
    marginLeft: 10,
    fontSize: 18,
  },
  button: {
    fontSize: 20,
    alignSelf: 'center',
    borderWidth: 3,
    width: 150,
    marginTop: 25,
    textAlign: 'center',
    backgroundColor: 'lightblue',
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
});
