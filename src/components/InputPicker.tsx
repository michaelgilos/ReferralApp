import {Input, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ModalSelector from 'react-native-modal-selector';

export type InputPickerData = {
  value: string;
};

type InputPickerProps = {
  label: string;
  data: InputPickerData[];
  onItemSelected: (value: string) => void;
};

export default ({label, data, onItemSelected}: InputPickerProps) => {
  const [value, setValue] = useState('');

  let index = 0;

  const items = data.map(({value}) => ({
    key: index++,
    label: value,
  }));

  return (
    <View style={{marginVertical: 10}}>
      <Text>{label}</Text>
      <TouchableOpacity onPress={() => console.log('asd')}>
        <ModalSelector
          data={items}
          initValue="Select..."
          supportedOrientations={['landscape']}
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          onChange={option => {
            setValue(option.label);
            onItemSelected(option.label);
          }}>
          <Input
            value={value}
            placeholder="Select..."
            disabled={true}
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
          />
        </ModalSelector>
      </TouchableOpacity>
    </View>
  );
};
