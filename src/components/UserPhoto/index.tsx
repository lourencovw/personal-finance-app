import React from 'react';
import { View, Dimensions, StyleSheet, Image, Text } from 'react-native';

const userPhoto = require("../../assets/generic-user.png");

const width = Dimensions.get('window').width * 0.12;

export const UserPhoto = () => {
    return (
        <View style={styles.userContainer}>
            <Image style={styles.img} source={userPhoto} />
            <View style={styles.badge}>
                <Text style={{color: 'white', fontSize: 10}}>6</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        width: width,
        height: width,
        position: 'relative'
    },
    img: {
        width: width,
        height: width,
        borderRadius: width * 0.5,
    },
    badge: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: '#123EDA',
        bottom: -2,
        left: -2,
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: 2
    },
    btnTextStyle: {
        color: '#ffffff',
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})