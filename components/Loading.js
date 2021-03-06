import React from 'react';
import { Image, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class Loading extends React.Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        global.global_user_gender = null;
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                global.global_user_id = user.uid;
                firebase.database().ref('/users/' + global_user_id).on('value', data => {
                    var userData = data.toJSON();
                    global.global_user_gender = userData.gender;
                    this.props.navigation.navigate(user ? 'EntranceScreen' : 'IntroScreen');
                })
            } else {
                this.props.navigation.navigate('IntroScreen');
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bird} source={require('../assets/colibri-logo.png')} />
                <Text style={styles.text}>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bird: {
        width: 200,
        height: 200,
        marginBottom: 50,
    },
    text: {
        marginBottom: 10
    },
})
