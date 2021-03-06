import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import _ from 'lodash';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Loading from './components/Loading.js';
import Intro from './components/Intro.js';
import Login from './components/Login.js'
import RegForm from './components/RegForm.js';
import Entrance from './components/Entrance.js';
import VideoPage from './components/Video.js';
import Profile from './components/Profile.js';
import Forest from './components/Forest.js';
import Others from './components/Others.js';
import Notifications2 from './components/notifications2.js';

import firebase from 'firebase';
let secrets = './secrets.json';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const config = {
    apiKey: "AIzaSyDHxYvWmfVhIlXXBi6WaESi3qeynhsL834",
    authDomain: secrets.AUTH_DOMAIN,
    databaseURL: "https://colibri-97b46.firebaseio.com",
    projectId: secrets.PROJECT_ID,
    storageBucket: "colibri-97b46.appspot.com",
    messagingSenderId: secrets.MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

const AppNavigator = createStackNavigator(
    {
        IntroScreen: Intro,
        RegFormScreen: RegForm,
        IntroScreen: Intro,
        RegFormScreen: RegForm,
        LoginScreen: Login,
        EntranceScreen: Entrance,
        ProfileScreen: Profile,
        ForestScreen: Forest,
        OthersScreen: Others,
        LoadingScreen: Loading,
        VideoPage: VideoPage,
        Notifications: Notifications2

    },
    {
        initialRouteName: 'VideoPage'
    }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer style={styles.container} />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});
