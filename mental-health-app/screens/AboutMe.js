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
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';
import { RFValue } from 'react-native-responsive-fontsize';

export default class AboutMe extends Component{
render(){
  return(
<View style={styles.container}>
      <SafeAreaView style ={styles.droidSafeArea}/>
 <Header
          backgroundColor={'azure'}
          centerComponent={{
            text: 'About the App',
            style: { color: 'black', fontSize: 30 },
          }}
        />
<Text style={styles.intro}>The Idea: This app by Kanika Andhare was designed to help people achieve tranquility and taking charge of their mental health. The main idea was around a way to handle panic attacks in difficult situations. 
 </Text>


<Text style={styles.intro}>Our Start: This was addressed by creating a panic button where in just one click you can recieve the guidiance you need whenever everything is slipping out of control. This app also has other features to help you improve, like consistent reminders to drink water, take some time to breathe, get fresh air etc. Its all up to you to make your own reminders that relieve mental stress
 </Text>

<Text style={styles.intro}>Features: Additionally, we have the journalling screen where at any point in time, you can put down your thoughts, whatever is bothering you, to relieve tension and help you address your feelings naturally. It is understood that Mental Health is not a one fits all solution, but this is not the end, we are constantly looking for feedback and more features to make sure this app addresses all of our audiences needs. We hope you can use it as a start and that this brings you, tranquility.
 </Text>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
        <Text style={styles.button}>
        Back to Menu
        </Text>
        </TouchableOpacity>
</View>
  )
}
};

const styles = StyleSheet.create({

container:{
backgroundColor: 'lightpink',
    resizeMode: 'contain',
    height: 2000,
},

intro:{
  marginBottom: 40,
  backgroundColor: 'lavender',
padding: 10,
marginTop: 30,

},
 droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

   button:{
textAlign: 'center',
borderWidth: 2,
width: 100,
marginLeft: 150,
backgroundColor: 'azure'


  }
})