import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function DeleteButton({ onPress , color = "red" , size = 24 }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons name="delete" size={size} color={color} />
    </TouchableOpacity>
  );
}
