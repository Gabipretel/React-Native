// 1) Demo Básica React-Hook-Form- 
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from './CustomInput';
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup';
import { schema } from './hookform';
//Demo sin validaciones 
// export default function ReactHookForm() {
//     const {
//         control,
//         handleSubmit,
//         formState: { errors },
//     } = useForm({
//         defaultValues: {
//         firstName: "",
//         lastName: "",
//         },
//     })
//     const onSubmit = (data) => console.log(data)
//     return (
//         <View>
            //<Text style={{fontSize:20,color:'black',marginVertical:40,textAlign:'center'}}>Demo básica Formik-Yup</Text>
//             <Controller
//             control={control}
//             rules={{
//                 required: true,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//             <TextInput
//                 placeholder="Nombre"
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 style={styles.input}
//             />
//             )}
//             name="firstName"
//         />
//         {errors.firstName && <Text>Es requerido</Text>}
//         <Controller
//             control={control}
//             rules={{
//             maxLength: 15,
//             required: true,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//                 <TextInput
//                 placeholder="Apellido"
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 style={styles.input}
//             />
//             )}
//             name="lastName"
//             />
//             {errors.lastName && <Text>Es requerido</Text>}
//         <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
//     </View>
//     )
//     }


//  2) Demo con CustomComponente.


//Demo con validaciones 
// export default function ReactHookForm() {
    //     const {
        //         control,
        //         handleSubmit,
        //         formState: { errors },
        //     } = useForm({
            //         defaultValues: {
                //             firstName: "",
                //         lastName: "",
                //         email:"",
                //         password:""
                //     },
                //     resolver: yupResolver(schema),
                // })
                // const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                // const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
                
                // const onSubmit = (data) => console.log(data)
                // // console.log(errors);
                // return (
                    //     <View>
                    //<Text style={{fontSize:20,color:'black',marginVertical:40,textAlign:'center'}}>Demo básica Formik-Yup</Text>
                    //         <CustomInput
                    //             control={control}
                    //             rules={{required:'El campo no puede estar vacio'}}
                    //             name="firstName"
                    //             placeholder="Nombre"
                    //             style={styles.input}
                    //             secureTextEntry={false}
                    //             />
                    //         <CustomInput
                    //             control={control}
                    //             rules={{required:'El campo no puede estar vacio'}}
                    //             name="lastName"
                    //             placeholder="Apellido"
                    //             style={styles.input}
                    //             secureTextEntry={false}
                    //             />
                    //         <CustomInput
                    //             control={control}
                    //             rules={{required:'El campo no puede estar vacio',pattern:{value:EMAIL_REGEX,message:'El email no es válido'}}}
                    //             name="email"
                    //             placeholder="Email"
                    //             style={styles.input}
                    //             secureTextEntry={false}
                    //             />
                    //         <CustomInput
                    //             control={control}
                    //             rules={{required:'El campo no puede estar vacio',pattern:{value:PASSWORD_REGEX,message:'El password no es válido'}}}
                    //             name="password"
//             placeholder="Password"
//             style={styles.input}
//             secureTextEntry
//             />
//         <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
//     </View>
//     );
// }

type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}




export default function ReactHookForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,

    } = useForm<Inputs>({
        defaultValues: {
        firstName: "",
        lastName: "",
        email:"",
        password:""
    },
    resolver: yupResolver(schema),
    mode:'onChange'
})
const watchName = watch('firstName')


const onSubmit = (data:Inputs) => console.log(data)

return (
    <View>
        <Text style={{fontSize:20,color:'black',marginVertical:40,textAlign:'center'}}>Demo básica React-hook-Yup</Text>
        <CustomInput
            control={control}
            // rules={schema}
            name="firstName"
            placeholder="Nombre"
            style={styles.input}
            secureTextEntry={false}
            />
        <CustomInput
            control={control}
            // rules={schema}
            name="lastName"
            placeholder="Apellido"
            style={styles.input}
            secureTextEntry={false}
            />
        <CustomInput
            control={control}
            // rules={{required:'El campo no puede estar vacio',pattern:{value:EMAIL_REGEX,message:'El email no es válido'}}}
            name="email"
            placeholder="Email"
            style={styles.input}
            secureTextEntry={false}
            />
        <CustomInput
            control={control}
            // rules={{required:'El campo no puede estar vacio',pattern:{value:PASSWORD_REGEX,message:'El password no es válido'}}}
            name="password"
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            />
        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
    </View>
    );
}

const styles = StyleSheet.create({
    input: {
    color:'black',
    marginVertical: 10,
    height: 40,
    borderWidth: 1,
    borderColor: 'green',
    maxWidth: 360,
    marginHorizontal:20
    },
});

