import {Input, Text} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';

type InputLabelProps = {
  label: string;
  value?: string;
  onInputTextChange: (text: string) => void;
};

export default ({label, value = '', onInputTextChange}: InputLabelProps) => (
  <View style={{marginVertical: 10}}>
    <Text>{label}</Text>
    <Input
      value={value}
      style={{fontSize: 16}}
      inputContainerStyle={{
        borderBottomWidth: 0,
      }}
      containerStyle={{
        height: 48,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
      }}
      onChangeText={onInputTextChange}
    />
  </View>
);
