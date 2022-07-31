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

export default class PostJournalScreen extends Component {
  constructor() {
    super();
    this.state = {
      journal1:'',

    };
  }

  render() {
     const text1=this.props.navigation.getParam('journal1');

    return (
      <View style={styles.container}>
        <SafeAreaView style ={styles.droidSafeArea}/>

<TextAnimationSlideDown value={'Acknowledge your Thoughts' } delay={20} duration={200} style={{color: 'black', fontSize:20}} />
<Text style={styles.thought}> Good job on getting your thoughts out!</Text>


        <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>{text1}</Text>
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
  container: {
    flex: 1
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
  }
});
