import React from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet, GestureResponderEvent } from 'react-native';

export interface IRoundButton {
    onPress: (event: GestureResponderEvent) => void;
    children: React.ReactNode;
    backColor: string;
}

const width = Dimensions.get('window').width

export const RoundButton = ({ onPress, children, backColor }: IRoundButton) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.btnContainerStyle, { backgroundColor: backColor }]}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainerStyle: {
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: width * 0.12 * 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTextStyle: {
        color: '#ffffff',
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})