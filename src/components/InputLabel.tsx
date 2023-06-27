import {Input, Text} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';

type InputLabelProps = {
  label: string;
  onInputTextChange: (text: string) => void;
};

export default ({label, onInputTextChange}: InputLabelProps) => (
  <View style={{marginVertical: 10}}>
    <Text>{label}</Text>
    <Input
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
