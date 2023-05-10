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

const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

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
});
