import React, { useRef, useState } from 'react'

enum Operators {
    sum, subtraction, split, multiply
}

export  const useCalculator = () => {
    const [previousNumber, setpreviousNumber] = useState('0')
    const [number, setNumber] = useState('0')
    const lastOperator = useRef<Operators>()

    const clear = () => {
        setNumber('0')
        setpreviousNumber('0')
    }

    const buildNumber = (numberT: string) => {

        // evitar doble punto
        if (number.includes('.') && numberT === '.') return
        //limita la cantidad de caracteres
        if (number.length > 15) return

        // punto decimal
        if (number.startsWith('0') || number.startsWith('-0')) {

            if (numberT === '.') {
                setNumber(number + numberT)

                // Evalua si es otro cero, y hay un punto
            } else if (numberT === '0' && number.includes('.')) {
                setNumber(number + numberT)
            }    //Evalua si es !== de 0 y agrega el numero.
            else if (numberT !== '0' && number.includes('.')) {
                setNumber(number + numberT)
            }
            //evaluar si es un nro diferente de 0 y no tiene un punto 
            else if (numberT !== '0' && !number.includes('.')) {
                setNumber(numberT)

                //evitar 0000.00.
            } else if (numberT === '0' && !number.includes('.')) {
                setNumber(number)
            }
        } else {
            setNumber(number + numberT)
        }

    }
    // Cambia signo + a - o viceversa
    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber(`-${number}`)
        }
    }

    const btnDelete = () => {
        let negative = ''
        let numberTemp = number

        if (number.includes('-')) {
            negative = '-'
            numberTemp = number.substr(1)
        }

        if (numberTemp.length > 1) {
            setNumber(negative + numberTemp.slice(0, -1))
        } else {
            setNumber('0')
        }
    }

    const changeNumberForPrevious = () => {
        //Cambia el numero principal al lugar de secundario para las operaciones
        if (number.endsWith('.')) {
            setpreviousNumber(number.slice(0, -1))
        } else {
            setpreviousNumber(number)
        }
        setNumber('0')
    }

    const btnSplit = () => {
        changeNumberForPrevious()
        lastOperator.current = Operators.split
    }
    const btnMultiply = () => {
        changeNumberForPrevious()
        lastOperator.current = Operators.multiply
    }
    const btnSubtraction = () => {
        changeNumberForPrevious()
        lastOperator.current = Operators.subtraction
    }
    const btnSum = () => {
        changeNumberForPrevious()
        lastOperator.current = Operators.sum
    }

    const calculateResult = () => {
        const num1 = Number(number)
        const num2 = Number(previousNumber)

        switch (lastOperator.current) {
            case Operators.sum:
                setNumber(`${num1 + num2}`)
                break;

            case Operators.subtraction:
                setNumber(`${num2 - num1}`)
                break;

            case Operators.split:
                if (num1 === 0 && num2 === 0) {
                    return setNumber('0')
                }
                setNumber(`${num2 / num1}`)
                break;

            case Operators.multiply:
                setNumber(`${num1 * num2}`)
                break;

            default:
                break;
        }
        setpreviousNumber('0')
    }
    return {
        previousNumber, 
        number,
        clear,
        positiveNegative,
        btnDelete,
        btnSplit,
        buildNumber,
        btnMultiply,
        btnSubtraction,
        btnSum,
        calculateResult
    }

}
