import { View, TextInput, TextStyle, Text } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

interface Props{
    control: any,
    name:string,
    placeholder:string,
    style:TextStyle,
    secureTextEntry:boolean
    rules?: any,
}
const CustomInput = (props:Props) => {
        return (
        <View>
            <Controller
                name={props.name}
                control={props.control}
                rules={props.rules ?? {}}
                render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <View>
                <TextInput
                    placeholder={props.placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={[props.style, {borderColor: error ? 'red' : 'black'}]}
                    secureTextEntry={props.secureTextEntry}
                    placeholderTextColor={'black'}
                />
                {error && (
                    <Text style={{color: 'red', alignSelf: 'stretch'}}>
                    {error.message || 'Error'}
                    </Text>
                )}
            </View>
            )}
            />
        </View>
    );
};

export default CustomInput;
