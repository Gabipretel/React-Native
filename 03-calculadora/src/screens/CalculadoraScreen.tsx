import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import BtnCalculator from '../components/BtnCalculator'
import { useCalculator } from '../hooks/useCalculator'



const CalculadoraScreen = () => {
  const { previousNumber, number, clear, positiveNegative, btnDelete, btnSplit, buildNumber, btnMultiply, btnSubtraction, btnSum, calculateResult } = useCalculator()

  return (
    <View style={styles.conCalculator}>
      {
        (previousNumber !== '0') && (<Text style={styles.littleResult}>{previousNumber}</Text>)
      }

      <Text style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        {number}</Text>

      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='C' color='#9B9B9B' action={clear} />
        <BtnCalculator text='+/-' color='#9B9B9B' action={positiveNegative} />
        <BtnCalculator text='del' color='#9B9B9B' action={btnDelete} />
        <BtnCalculator text='/' color='#FF9427' action={btnSplit} />
      </View>

      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='7' action={buildNumber} />
        <BtnCalculator text='8' action={buildNumber} />
        <BtnCalculator text='9' action={buildNumber} />
        <BtnCalculator text='x' color='#FF9427' action={btnMultiply} />
      </View>
      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='4' action={buildNumber} />
        <BtnCalculator text='5' action={buildNumber} />
        <BtnCalculator text='6' action={buildNumber} />
        <BtnCalculator text='-' color='#FF9427' action={btnSubtraction} />
      </View>
      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='1' action={buildNumber} />
        <BtnCalculator text='2' action={buildNumber} />
        <BtnCalculator text='3' action={buildNumber} />
        <BtnCalculator text='+' color='#FF9427' action={btnSum} />
      </View>
      {/* Fila de btones */}
      <View style={styles.rows}>
        <BtnCalculator text='0' ancho action={buildNumber} />
        <BtnCalculator text='.' action={buildNumber} />
        <BtnCalculator text='=' color='#FF9427' action={calculateResult} />
      </View>



    </View>
  )
}

export default CalculadoraScreen

