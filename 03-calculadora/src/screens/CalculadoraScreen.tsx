import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import BtnCalculator from '../components/BtnCalculator'

const CalculadoraScreen = () => {

  const [previousNumber, setpreviousNumber] = useState('0')
  const [number, setNumber] = useState('100')


  const clear = () => {
    setNumber('0')
  }

  const buildNumber = (numberT: string) => {

    // evitar doble punto
    if (number.includes('.') && numberT === '.') return

    // punto decimal
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberT === '.') {
        setNumber(number + numberT)
        
        // Evalua si es otro cero, y hay un punto
      } else if (numberT === '0' && number.includes('.')) {
        setNumber(number + numberT)
      }
      //evaluar si es un nro diferente de 0 y no tiene un punto 
      else if(numberT !== '0' && !number.includes('.')){
        setNumber(numberT)

        //evitar 0000.00
      }else if(numberT === '0' && !number.includes('.')){
          setNumber(number)
      }
    } else {
      setNumber(number + numberT)
    }

  }

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))
    } else {
      setNumber(`-${number}`)
    }
  }

  return (
    <View style={styles.conCalculator}>
      <Text style={styles.littleResult}>1,500.00</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit={true} >{number}</Text>

      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='C' color='#9B9B9B' action={clear} />
        <BtnCalculator text='+/-' color='#9B9B9B' action={positiveNegative} />
        <BtnCalculator text='del' color='#9B9B9B' action={clear} />
        <BtnCalculator text='/' color='#FF9427' action={clear} />
      </View>

      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='7' action={buildNumber} />
        <BtnCalculator text='8' action={buildNumber} />
        <BtnCalculator text='9' action={buildNumber} />
        <BtnCalculator text='x' color='#FF9427' action={clear} />
      </View>
      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='4' action={buildNumber} />
        <BtnCalculator text='5' action={buildNumber} />
        <BtnCalculator text='6' action={buildNumber} />
        <BtnCalculator text='-' color='#FF9427' action={clear} />
      </View>
      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='1' action={buildNumber} />
        <BtnCalculator text='2' action={buildNumber} />
        <BtnCalculator text='3' action={buildNumber} />
        <BtnCalculator text='+' color='#FF9427' action={clear} />
      </View>
      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='0' ancho action={buildNumber} />
        <BtnCalculator text='.' action={buildNumber} />
        <BtnCalculator text='=' color='#FF9427' action={clear} />
      </View>



    </View>
  )
}

export default CalculadoraScreen

