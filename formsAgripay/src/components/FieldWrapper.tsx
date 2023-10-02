// Este es un componente que envuelve el retorno del CustomInput
//  para que sea mas sencillo y dinámico al modificar y ahorrar codigo
import { View, Text } from "react-native";
import React from "react";

interface Props {
    children: JSX.Element | JSX.Element[],
    label:string,
    formikProps:any,
    formikKey:string
}
const FieldWrapper = ({children, label,formikProps,formikKey}:Props) => {
    return (
        <View style={{marginVertical: 4, marginHorizontal: 20}}>
            <Text style={{marginBottom:3,color:'black'}}>{label}</Text>
            {children}
            {formikProps.touched[formikKey] && formikProps.errors[formikKey] && (
                <Text style={{color: 'red'}}>{formikProps.errors[formikKey]}</Text>
            )}
        </View>
        )
};

export default FieldWrapper;
