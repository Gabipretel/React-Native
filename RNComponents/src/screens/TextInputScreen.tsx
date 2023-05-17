import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch'
import { Text } from 'react-native';


const TextInputScreen = () => {
  const {form, onChange,isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title={'TextInputs'} />
            <TextInput
              style={stylesTextInput.inputStyle}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={stylesTextInput.inputStyle}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />

            <View style={stylesTextInput.switchRow}>
              <Text style={stylesTextInput.switchText}>isActive</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={stylesTextInput.inputStyle}
              placeholder="Ingrese su telefono"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const stylesTextInput = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:8
  }
});
