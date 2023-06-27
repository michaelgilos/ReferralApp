import {Button, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import InputHeader from '../../components/InputHeader';
import InputLabel from '../../components/InputLabel';
import InputPicker from '../../components/InputPicker';
import {Referral} from '../../types';
import {useCreateReferral} from './hooks/useCreateReferral';

export default () => {
  const addReferral = useCreateReferral();

  const [data, setData] = useState<Referral>({});

  const onChangeData = (prop: string) => (value: string) => {
    setData({
      ...data,
      [prop]: value,
    });
  };

  console.log(data);

  const handleAddReferral = () => {
    if (!data.firstname) {
      Alert.alert('Must have firstname');
      return;
    }
    if (!data.lastname) {
      Alert.alert('Must have lastname');
      return;
    }
    if (!data.email) {
      Alert.alert('Must have email');
      return;
    }
    if (!data.mobile) {
      Alert.alert('Must have mobile');
      return;
    }

    addReferral.mutate(data, {
      onSuccess: () => {
        Alert.alert('Successfully created referral\nThe view will auto update');
        setData({});
      },
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h4 h4Style={{marginTop: 10}}>
          Referral Builder
        </Text>

        <InputHeader label="Personal details" />

        <InputLabel
          label="First name"
          value={data.firstname}
          onInputTextChange={onChangeData('firstname')}
        />
        <InputLabel
          label="Last name"
          value={data.lastname}
          onInputTextChange={onChangeData('lastname')}
        />
        <InputLabel
          label="Email"
          value={data.email}
          onInputTextChange={onChangeData('email')}
        />
        <InputLabel
          label="Mobile"
          value={data.mobile}
          onInputTextChange={onChangeData('mobile')}
        />

        <InputHeader label="Address" />

        <InputLabel
          label="Address line 1"
          value={data.address1}
          onInputTextChange={onChangeData('address1')}
        />
        <InputLabel
          label="Address line 2"
          value={data.address2}
          onInputTextChange={onChangeData('address2')}
        />
        <InputLabel
          label="Suburb"
          value={data.suburb}
          onInputTextChange={onChangeData('suburb')}
        />
        <InputPicker
          label="State"
          value={data.state}
          data={[{value: 'Cebu'}, {value: 'Manila'}]}
          onItemSelected={onChangeData('state')}
        />
        <InputLabel
          label="Postcode"
          value={data.postcode}
          onInputTextChange={onChangeData('postcode')}
        />
        <InputPicker
          label="Country"
          value={data.country}
          data={[{value: 'Philippines'}, {value: 'Australia'}]}
          onItemSelected={onChangeData('country')}
        />

        <Button
          title="Create referral"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={handleAddReferral}
          loading={addReferral.isLoading}
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
