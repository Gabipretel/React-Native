import { View, Text, TextInput, ViewStyle } from "react-native";
import React from "react";
import FieldWrapper from "./FieldWrapper";

interface Props{
    label: string
    formikProps:any
    style:ViewStyle
    formikKey:string,
    placeholder:string,
    placeholderTextColor:string,
    secureTextEntry? :boolean
}
// const CustomFormikInput = ({formikKey,style,formikProps,label,placeholder,placeholderTextColor,secureTextEntry, ...rest }:Props) => {
//     // console.log('props:', formikProps);
    
//     return (
//     <View style={{marginVertical: 4, marginHorizontal: 20}}>
//         <Text style={{marginBottom:3}}>{label}</Text>
//         <TextInput
//             onChangeText={formikProps.handleChange(formikKey)}
//             style={formikProps.touched[formikKey] && formikProps.errors[formikKey] ? [style,{borderColor:'red'}] : style}
//             placeholder={placeholder}
//             placeholderTextColor={placeholderTextColor}
//             onBlur={formikProps.handleBlur(formikKey)}
//             secureTextEntry={secureTextEntry}
//             {...rest}
//         />
//         {formikProps.touched[formikKey] && formikProps.errors[formikKey] && (
//             <Text style={{color: 'red'}}>{formikProps.errors[formikKey]}</Text>
//         )}
//     </View>
//     );
// };


// Refactorización de estilos que se repiten,textos y errores.

const CustomFormikInput = ({formikKey,style,formikProps,label,placeholder,placeholderTextColor,secureTextEntry, ...rest }:Props) => {
    // console.log('props:', formikProps);
    return (
<FieldWrapper
label={label}
formikProps={formikProps}
formikKey={formikKey}
>
    <TextInput
            onChangeText={formikProps.handleChange(formikKey)}
            style={formikProps.touched[formikKey] && formikProps.errors[formikKey] ? [style,{borderColor:'red'}] : style}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onBlur={formikProps.handleBlur(formikKey)}
            secureTextEntry={secureTextEntry}
            {...rest}
        />
</FieldWrapper>
    );
};
export default CustomFormikInput;
