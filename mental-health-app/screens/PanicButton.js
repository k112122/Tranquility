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
import {
  TextAnimationFadeIn,
  TextAnimationZoom,
  TextAnimationRain,
  TextAnimationSlideDown,
  TextAnimationSlideUp,
  TextAnimationSlideLeft,
  TextAnimationSlideRight,
  TextAnimationShake,
  TextAnimationReverse,
  TextAnimationDeZoom,
} from 'react-native-text-effects';
import { RFValue } from 'react-native-responsive-fontsize';
import { Audio } from 'expo-av';
import ReactAudioPlayer from 'react-audio-player';

class PanicButton extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
 <Header
          backgroundColor={'azure'}
          centerComponent={{
            text: 'Breathe..',
            style: { color: 'black', fontSize: 30 },
          }}
        />
        <View>
        <Text style={styles.thought}>
          This is a guided meditation to help you work through your feelings
          right now.
        </Text>

<ReactAudioPlayer
  src="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6e991406bfd8fca9f0d65513105ed0c2"
  autoPlay
  controls
/>

</View>

<TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}>
        <Text style={styles.button}>
        Back to Menu
        </Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  container: {

    backgroundColor: 'darkturquoise',
    resizeMode: 'contain',
    height: 2000,
  },
  thought: {
    backgroundColor: 'darkturquoise',
    marginBottom: 20, 
  },
button:{
    fontSize: 20,
    alignSelf: 'center',
    borderWidth: 3,
    width: 150,
    marginTop: 25,
    textAlign: 'center',
    backgroundColor: 'lightblue', 
}


});

export default PanicButton;
