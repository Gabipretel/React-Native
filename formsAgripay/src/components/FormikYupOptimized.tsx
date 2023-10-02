import {
  SafeAreaView,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import CustomFormikInput from './CustomFormikInput';
import { validationSchema } from './ValidationSchema';
import SwitchField from './SwitchField';

// Demo refactorizada con esquemas afuera y customInput afuera.
const FormikYup = () => {
  return (
    <SafeAreaView style={{marginTop: 30}}>
      <Formik
        initialValues={{name: '', lastName: '', email: '',confirmPassword: '', password: '', agreeToTerms: false}}
        onSubmit={(values, actions) => {
           Alert.alert('Valores a Enviar:',JSON.stringify(values))
            setTimeout(() => {
            actions.setSubmitting(false);
            }, 2000);
        }}
        validationSchema={validationSchema}>
        {formikProps => (
            <>
            <CustomFormikInput
                label={'Nombre'}
                formikProps={formikProps}
                style={styles.input}
                formikKey={'name'}
                placeholderTextColor={'black'}
                placeholder={'Escribe tu nombre'}
            />
            <CustomFormikInput
                label={'Apellido'}
                formikProps={formikProps}
                style={styles.input}
                formikKey={'lastName'}
                placeholderTextColor={'black'}
                placeholder={'Escribe tu Apellido'}
            />
            <CustomFormikInput
                label={'Email'}
                formikProps={formikProps}
                style={styles.input}
                formikKey={'email'}
                placeholderTextColor={'black'}
                placeholder={'Escribe tu email'}
            />
            <CustomFormikInput
                label={'Password'}
                formikProps={formikProps}
                style={styles.input}
                formikKey={'password'}
                placeholderTextColor={'black'}
                placeholder={'Escribe tu password'}
                secureTextEntry 
            />
            <CustomFormikInput
                label={'Confirmar Password'}
                formikProps={formikProps}
                style={styles.input}
                formikKey={'confirmPassword'}
                placeholderTextColor={'black'}
                placeholder={'Confirma tu password'}
                secureTextEntry
            />
            <SwitchField
            label='Acepta los términos'
            formikKey='agreeToTerms'
            formikProps={formikProps}
            />
            {formikProps.isSubmitting ? (
                <ActivityIndicator />
            ) : (
                <Button
                title="Enviar"
                onPress={() => formikProps.handleSubmit()}
                />
            )}
            </>
        )}
        </Formik>
    </SafeAreaView>
    );
};

export default FormikYup;

const styles = StyleSheet.create({
  input: {
    color: 'black',
    marginVertical: 10,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    maxWidth: 360,
  },
});
