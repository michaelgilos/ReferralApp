import {Divider, Text} from '@rneui/themed';
import React from 'react';

type InputHeaderProps = {
  label: string;
};

const InputHeader = ({label}: InputHeaderProps) => (
  <>
    <Text style={{marginVertical: 20}}>{label}</Text>
    <Divider style={{marginVertical: 10}} />
  </>
);

export default InputHeader;
