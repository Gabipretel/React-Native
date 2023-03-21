import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform  } from 'react-native'
import React from 'react'


interface Props {
    title: string;
    position?: 'bl' | 'br'
    onPress: () => void
}

const Fab = ({ title, position = 'br', onPress }: Props) => {

    const ios =()=>{
        return(
            <TouchableOpacity 
            activeOpacity={0.8} 
            style={[styles.btnFab, (position === 'bl') ? styles.left : styles.right]} onPress={onPress}>

            {/* <TouchableOpacity style={position === 'bl' ? styles.btnFabL : styles.btnFabR} onPress={onPress} > */}
                <View style={styles.btn}>
                    <Text style={styles.btnText} >{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android =()=>{
        return(
            <View style={[styles.btnFab, (position === 'bl') ? styles.left : styles.right]}>

            {/* <TouchableOpacity style={position === 'bl' ? styles.btnFabL : styles.btnFabR} onPress={onPress} > */}
    
            <TouchableNativeFeedback  
            onPress={onPress} 
            background={TouchableNativeFeedback.Ripple('#bacfcb',false,30)} >
                <View style={styles.btn}>
                    <Text style={styles.btnText} >{title}</Text>
                </View>
            </TouchableNativeFeedback >
            </View>
        )
    }

 
    return (Platform.OS === 'ios') ? ios() : android()
}

export default Fab

const styles = StyleSheet.create({
    btnFab: {
        position: 'absolute',
        bottom: 10,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    // btnFabL: {
    //     position: 'absolute',
    //     bottom: 10,
    //     left: 25
    // },
    // btnFabR: {
    //     position: 'absolute',
    //     bottom: 10,
    //     right: 25
    // },
    btn: {
        width: 60,
        height: 60,
        padding: 10,
        backgroundColor: '#504B43',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    },
    btnText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
        // textAlign:'center'
    },
})