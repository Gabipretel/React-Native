import {View, Text, Switch, Platform} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled( !isEnabled);

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title='Switches'/>
      <Switch
        trackColor={{false: '#000', true: '#81b0ff'}}
        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}~
        thumbColor={(Platform.OS === 'android')? 'red' : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchScreen;
