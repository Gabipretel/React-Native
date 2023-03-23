import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    text: string;
    color?: string;
    ancho?: boolean;
    action: (numberText:string) => void;
}

const BtnCalculator = ({ text, color = '#2D2D2D', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={()=>action(text)}
        >
            <View style={{
                ...styles.btn,
                backgroundColor: color,
                width: ancho ? 143 : 63
            }}>
                <Text style={{
                    ...styles.btnText,
                    color: (color === '#9B9B9B') ? '#000' : '#FFF'
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BtnCalculator

const styles = StyleSheet.create({
    btn: {
        height: 63,
        width: 63,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    btnO: {
        height: 63,
        width: 63,
        backgroundColor: '#FF9427',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    btnText: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: '300'
    }
}) 