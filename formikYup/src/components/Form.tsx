import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {View, Text, ScrollView, SafeAreaView,TextInput, TouchableOpacity} from 'react-native';

const Form = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        <Formik
          initialValues={{email: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextInput
                style={{borderWidth:1, color:'black'}}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TouchableOpacity onPress={handleSubmit}>
                <Text>Enviar</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Form;
