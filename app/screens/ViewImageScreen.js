import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <Text>X</Text>
            </View>
            <View style={styles.delIcon}>
            <Text>X</Text>
            </View>
            <Image resizeMode={"contain"} style={styles.image} source={require('../assets/chair.jpg')}></Image>
        </View>
        
    );
}

const styles = StyleSheet.create({
    closeIcon :{
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    delIcon :{
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%", 
    },
    
})

export default ViewImageScreen;