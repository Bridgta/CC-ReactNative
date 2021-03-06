import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')} >
            <View style={styles.logoCont}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}>
                <Text>Login</Text>
            </View>
            <View style={styles.regButton}>
                <Text>Sign Up</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoCont: {
        position: 'absolute',
        top: 90,
        alignItems: "center",
    },
    regButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    

})

export default WelcomeScreen;