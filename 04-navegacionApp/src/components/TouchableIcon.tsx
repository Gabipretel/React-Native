import { TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext';

interface Props{
    iconName:string;
    size:number;
}


const TouchableIcon = ({iconName,size}:Props) => {

const {changeFavIcon} = useContext(AuthContext)

  return (
    <TouchableOpacity
    onPress={()=> changeFavIcon(iconName)}
    >
        <Icon name={iconName} size={size} color='red'/>
         
    </TouchableOpacity>
  )
}

export default TouchableIcon