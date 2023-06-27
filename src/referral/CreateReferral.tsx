import {Button, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import InputHeader from '../components/InputHeader';
import InputLabel from '../components/InputLabel';

export default () => {
  const [name, setName] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h4 h4Style={{marginTop: 10}}>
          Referral Builder
        </Text>

        <InputHeader label="Personal details" />

        <InputLabel label="First name" onInputTextChange={setName} />
        <InputLabel label="Last name" onInputTextChange={setName} />
        <InputLabel label="Email" onInputTextChange={setName} />
        <InputLabel label="Mobile" onInputTextChange={setName} />

        <InputHeader label="Address" />

        <InputLabel label="Address line 1" onInputTextChange={setName} />
        <InputLabel label="Address line 2" onInputTextChange={setName} />
        <InputLabel label="Suburb" onInputTextChange={setName} />
        <InputLabel label="Postcode" onInputTextChange={setName} />

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
