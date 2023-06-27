import {Button, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import InputHeader from '../components/InputHeader';
import InputLabel from '../components/InputLabel';
import InputPicker from '../components/InputPicker';
import {Referral} from '../types';

export default () => {
  const [data, setData] = useState<Referral>({});

  const onChangeData = (prop: string) => (value: string) => {
    setData({
      ...data,
      [prop]: value,
    });
  };

  console.log(data);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h4 h4Style={{marginTop: 10}}>
          Referral Builder
        </Text>

        <InputHeader label="Personal details" />

        <InputLabel
          label="First name"
          onInputTextChange={onChangeData('firstname')}
        />
        <InputLabel
          label="Last name"
          onInputTextChange={onChangeData('lastname')}
        />
        <InputLabel label="Email" onInputTextChange={onChangeData('email')} />
        <InputLabel label="Mobile" onInputTextChange={onChangeData('mobile')} />

        <InputHeader label="Address" />

        <InputLabel
          label="Address line 1"
          onInputTextChange={onChangeData('address1')}
        />
        <InputLabel
          label="Address line 2"
          onInputTextChange={onChangeData('address2')}
        />
        <InputLabel label="Suburb" onInputTextChange={onChangeData('suburb')} />
        <InputPicker
          label="State"
          data={[{value: 'Cebu'}, {value: 'Manila'}]}
          onItemSelected={onChangeData('state')}
        />
        <InputLabel
          label="Postcode"
          onInputTextChange={onChangeData('postcode')}
        />
        <InputPicker
          label="Country"
          data={[{value: 'Philippines'}, {value: 'Australia'}]}
          onItemSelected={onChangeData('country')}
        />

        <Button
          title="Create referral"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
