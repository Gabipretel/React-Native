import { View, Text, SafeAreaView, TextInput ,Button , ActivityIndicator, StyleSheet } from "react-native";
import React from 'react';
import { Formik } from 'formik'
import * as yup from 'yup'

// Demo basica Formik, props de formulario Formik 
const FormikYup = () => {

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const validationSchema = yup.object().shape({
        name: yup.string().min(4,'Se requiere minimo 4 caracteres').max(20,'No mas de 20 caracteres').required(),
        lastName:yup.string().min(4,'Se requiere minimo 4 caracteres').max(20,'No mas de 20 caracteres').required(),
        email:yup.string().email('El email no es valido').matches(EMAIL_REGEX).required(),
        password: yup.string().matches(PASSWORD_REGEX,'No es valido ').required()
    })
    
    return (
    <SafeAreaView style={{marginTop: 30}}>
        <Formik 
        initialValues={{name:'', lastName:'',email:'',password:''}}
        onSubmit={(values,actions)=>{
            console.log('data:', values)
            setTimeout(()=> {
                actions.setSubmitting(false)
            } ,2000)
        }}
        validationSchema={validationSchema}
        >
            {formikProps => (
                <View style={{marginVertical:20,marginHorizontal:20}}> 
                    <TextInput
                    onChangeText={formikProps.handleChange('name')}
                    style={styles.input }
                    placeholder="Escribe tu nombre"
                    placeholderTextColor={'black'}
                    onBlur={formikProps.handleBlur('name')}
                    />
                    { formikProps.touched.name && formikProps.errors.name && <Text style={{color:'red'}}>{formikProps.errors.name}</Text> }

                    <TextInput
                    onChangeText={formikProps.handleChange('lastName')}
                    style={styles.input }
                    placeholder="Escribe tu apellido"
                    placeholderTextColor={'black'}
                    onBlur={formikProps.handleBlur('lastName')}
                    
                    />
                    { formikProps.touched.lastName && formikProps.errors.lastName && <Text style={{color:'red'}}>{formikProps.errors.lastName}</Text> }

                    <TextInput
                    onChangeText={formikProps.handleChange('email')}
                    style={styles.input }
                    placeholder="Escribe tu email"
                    placeholderTextColor={'black'}
                    onBlur={formikProps.handleBlur('email')}
                    
                    />
                    {formikProps.touched.email && formikProps.errors.email && <Text style={{color:'red'}}>{formikProps.errors.email}</Text> }

                    <TextInput
                    onChangeText={formikProps.handleChange('password')}
                    style={styles.input }
                    placeholder="Escribe tu password"
                    placeholderTextColor={'black'}
                    secureTextEntry
                    onBlur={formikProps.handleBlur('password')}
                    
                    />
                    {formikProps.touched.password && formikProps.errors.password && <Text style={{color:'red'}}>{formikProps.errors.password}</Text> }

                    { formikProps.isSubmitting ? 
                    <ActivityIndicator/> 
                    : 
                    <Button
                    title="Enviar"
                    onPress={()=> formikProps.handleSubmit()}
                    />}
                    
                </View>
            )}
        </Formik>
      </SafeAreaView>
    );
    };

export default FormikYup;

      {/* <View
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, marginVertical: 40, color: 'black'}}>
            Demo Formik-Yup
            </Text>

        </View> */}

const styles = StyleSheet.create({
    input:{
        color:'black',
        marginVertical: 10,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        maxWidth: 360,
        }
})