import {Formik} from 'formik';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {validationSchema} from './validationSchema';

const FormFormik = () => {
  return (
    <>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
  >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          isValidating,
          dirty
        }) => (
            
          <View style={styles.container}>
               <Text style={{marginHorizontal:67,marginVertical:70,fontSize:30}}>Registrate Ahora ! </Text>
            <TextInput style={{borderWidth:1,borderRadius:8,color:'#000', marginBottom:10}}
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              autoCapitalize="none"
            />
            {errors.name && touched.name && (
              <Text style={{color: 'red',width:200,borderWidth:2}}>{errors.name}</Text>
            )}
            <TextInput style={{borderWidth:1,borderRadius:8,color:'#000', marginBottom:10}}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              autoCorrect={false}
            />
            {errors.email && touched.email && (
              <Text style={{color: 'red',width:200,borderWidth:2}}>{errors.email}</Text>
            )}
            <TextInput style={{borderWidth:1,borderRadius:8,color:'#000', marginBottom:10}}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={{color: 'red',width:200,borderWidth:2}}>{errors.password}</Text>
            )}

            <TouchableOpacity
            style={!(dirty && isValid) ? {backgroundColor:'grey',width:200,height:50}: {backgroundColor:'orange',width:200,height:50} }
            // style={{backgroundColor:'orange',width:200,height:50}}
            onPress={handleSubmit}
            disabled={!(dirty && isValid)}
            > 
            <Text>Enviar</Text>
              </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
};
export default FormFormik;



const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 12,
    // flexDirection: 'row',
    // alignItems: 'center',
    // alignSelf: 'stretch',
    // backgroundColor: 'grey',
    // borderRadius: 14,
    // borderWidth: 1,
    // borderColor: 'grey',
    // height: 45,
  },
});
