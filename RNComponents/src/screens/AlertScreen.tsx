import {View, Button, Alert} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      // {
      //   cancelable: true,
      //   onDismiss: () => console.log('onDismiss'),
      // }, ESTO PERMITE Q EL USUARIO PUEDA NO APRETAR EN LA ALERTA PARA SALIR.
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alertas" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};

export default AlertScreen;
