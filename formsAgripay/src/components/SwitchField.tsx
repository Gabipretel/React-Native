import {View, Text , Switch } from 'react-native';
import React from 'react';

interface Props{
    label: string
    formikProps:any
    formikKey:string,
}
const SwitchField = ({formikProps , formikKey , label, ...rest }: Props) => {
    return (
        <View style={{marginVertical: 4, marginHorizontal: 20}}>
            <Text style={{marginBottom:3}}>{label}</Text>
            <Switch
            value={formikProps.values[formikKey]}
            onValueChange={ (value) => {
                formikProps.setFieldValue(formikKey,value)
            }}
            {...rest}
            />
            {formikProps.touched[formikKey] && formikProps.errors[formikKey] && (
                <Text style={{color: 'red'}}>{formikProps.errors[formikKey]}</Text>
            )}
        </View>
        )
};

export default SwitchField;
