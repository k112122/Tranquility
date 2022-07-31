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

export default class JournalScreen extends Component {
  constructor() {
    super();
    this.state = {
journal1:'hi',
    };
  }

    submitButton = async (journal1) => {
    console.log("submit button called");
    console.log(this.props);
    this.props.navigation.navigate('PostJournalScreen', { journal1: journal1 });

  };

render() {
      var {journal1} = this.state;

  return (


<View>
      <SafeAreaView style ={styles.droidSafeArea}/>

<TextAnimationSlideDown value={"A moment of reflection" } delay={20} duration={200} style={{color: 'black', fontSize:20}} />
<Text style={styles.thought}> What is on your mind?</Text>


<TextInput style ={styles.inputFont}
onChangeText={(text) => {
            this.setState({ journal1:text  });
          }}
          value={this.state.text}placeholder={"title"}
placeholderTextColor="black"   
multiline 
numberOfLines={6}


/>
           <TouchableOpacity
          onPress={() =>
            this.submitButton(
              this.state.journal1
            )
          }>
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
</View>
  
  
  
  )}



  
}
const styles = StyleSheet.create({

thought:{

fontSize: 20,
backgroundColor: 'plum'

},

 droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

  inputFont: {
    marginTop: 30,
marginLeft: 30,
marginRight: 30,
borderWidth: 3,
justifyContent: 'center',
textAlign: 'center'

  },

  button:{
textAlign: 'center',
borderWidth: 2,
width: 50,
marginLeft: 150,
marginTop: 30,

  }



})
