import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
	onChange: (value:boolean)=> void
}

const CustomSwitch = ({isOn,onChange}: Props) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
		setIsEnabled(!isEnabled)
		onChange(!isEnabled)
	};

  return (
    <Switch
      trackColor={{false: '#000', true: '#81b0ff'}}
      // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}~
      thumbColor={Platform.OS === 'android' ? 'red' : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
