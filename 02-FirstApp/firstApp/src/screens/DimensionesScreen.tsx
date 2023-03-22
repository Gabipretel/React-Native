import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

const DimensionesScreen = () => {
    const { width, height } = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
            <Text style={styles.title}>altura:{height} ancho: {width}</Text>
        </View>
    )
}

export default DimensionesScreen


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        backgroundColor: 'blue'
    },
    box: {
        width: '50%',
        height: '25%',
        backgroundColor: 'red'
    },
    title: {
        fontSize: 30
    }
})