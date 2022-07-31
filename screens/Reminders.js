import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Header } from 'react-native-elements';
import axios from 'axios';
import { Audio } from 'expo-av';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Reminders extends Component {
  constructor() {
    super();
    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
    };
  }

  submitButton = async (text1, text2, text3, text4, text5) => {
    console.log('submit button called');
    console.log(this.props);
    this.props.navigation.navigate('Notifications', { text1: text1 });
    this.props.navigation.navigate('Notifications', { text2: text2 });
    this.props.navigation.navigate('Notifications', { text3: text3 });
    this.props.navigation.navigate('Notifications', { text4: text4 });
    this.props.navigation.navigate('Notifications', { text5: text5 });
  };

  render() {
    var { text1, text2, text3, text4, text5 } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Header
          backgroundColor={'azure'}
          centerComponent={{
            text: 'Reminders',
            style: { color: 'black', fontSize: 25 },
          }}
        />
        <TextInput
          placeholder="Books"
          placeholderTextColor="black"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text1: text });
          }}
          value={this.state.text}
        />
        <TextInput
          placeholder="Bags"
          placeholderTextColor="black"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text2: text });
          }}
          value={this.state.text}
        />
        <TextInput
          placeholder="Water"
          placeholderTextColor="black"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text3: text });
          }}
          value={this.state.text}
        />
        <TextInput
          placeholder="Keys"
          placeholderTextColor="black"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text4: text });
          }}
          value={this.state.text}
        />
        <TextInput
          placeholder="Mobile Phone"
          placeholderTextColor="black"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text5: text });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          onPress={() =>
            this.submitButton(
              this.state.text1,
              this.state.text2,
              this.state.text3,
              this.state.text4,
              this.state.text5
            )
          }>
          <Text style={styles.button}>Set Reminders for every 2 hours</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'mistyrose',
    resizeMode: 'contain',
    height: 2000,
  },
  inputBox: {
    borderWidth: 3,
    marginTop: 30,
    height: 40,
    fontSize: 20,
    padding: 20,
    margin: 4,
    placeholderTextColor: 'black',
  },
  button: {
    fontSize: 20,
    alignSelf: 'center',
    borderWidth: 3,
    width: 300,
    marginTop: 25,
    textAlign: 'center',
    backgroundColor: 'lightblue',
    padding: 8,
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
