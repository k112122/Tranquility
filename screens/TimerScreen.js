import  React, { Component } from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, TextInput, Alert, ToastAndroid,  SafeAreaView,
  Platform,
  StatusBar,} from 'react-native';
import {Header} from 'react-native-elements'
import axios from 'axios'
import { Audio } from 'expo-av';
import { RFValue } from 'react-native-responsive-fontsize';

export default class TimerScreen extends React.Component {

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
  render(){

    const response = this.state.response;
   // const hour = this.state.hour;
    //const time = this.state.time;

  return (
    <View style={styles.container}>
          <SafeAreaView style ={styles.droidSafeArea}/>

      <Header backgroundColor = 'red' style = {{marginBottom:90}}
      
      centerComponent = {{
        text: "Screen Time Monitor",
        style:{color:'plum', fontSize:20,padding:1}
      }}
        />
         <Text style={{fontSize:35, marginTop: 50, marginLeft: 170 }}>
        {this.state.counter}
        </Text>
  
<Text style = {{fontSize:30,fontFamily:'bold',marginLeft:140,
marginTop:50}}> Time: {this.hours}:{this.min}</Text>

<Text 
style = {{marginLeft:100,color:'black',width:60,height:60,fontSize:40}}> {this.response} </Text>
<View>
    <TouchableOpacity style = {{width:250,height:50,justifyContent:"center",marginLeft:80,marginTop:5,backgroundColor:'red'}}   
     onPress = {()=>{ this.displayAlert()  }}
    >

<Text style = {{color:'white', justifyContent:"center",alignSelf:"center"}}
>About this App</Text>
   
    </TouchableOpacity>
    </View>
    </View>

    
    

     
    
  );
}
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'plum',
    padding: 8,
  },
droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
});
