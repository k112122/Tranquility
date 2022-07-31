import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import JournalScreen from './screens/JournalScreen';
import PanicButton from './screens/PanicButton';
import Reminders from './screens/Reminders';
import Notifications from './screens/Notifications';
import TimerScreen from './screens/TimerScreen';
import PostJournalScreen from './screens/PostJournalScreen'
import AboutMe from './screens/AboutMe'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({

  PanicButton: PanicButton,

  HomeScreen: HomeScreen,
  AboutMe:AboutMe,   
    TimerScreen: TimerScreen,
  Reminders: Reminders,

   Notifications: Notifications,
  JournalScreen: JournalScreen,
  PanicButton: PanicButton,
  PostJournalScreen: PostJournalScreen,
});

const AppContainer = createAppContainer(AppNavigator);
