import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Fab from "../components/Fab";

const ContadorScreen = () => {
    const [counter, setCounter] = useState<number>(0)

    const handlerCounterRest = () => {
        setCounter(counter - 1)
    }
    const handlerCounterSum = () => {
        setCounter(counter + 1)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {counter}</Text>
            <Fab title='+1' position='br' onPress={handlerCounterSum} />
            <Fab title='-1' position='bl' onPress={handlerCounterRest}/>

            {/* <TouchableOpacity style={styles.btnFabR} onPress={handlerCounterSum}>
                <View style={styles.btn}> 
                    <Text style={styles.btnText} >+1</Text>
                </View>

            </TouchableOpacity> */}
        </View>
    )
}
export default ContadorScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FD694',
        justifyContent: 'center'

    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'relative',
        top: -40
    },

})