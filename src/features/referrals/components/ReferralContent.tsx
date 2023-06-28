import {Icon, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Referral} from '../../../types';

const ReferralItem = ({data}: {data: Referral}) => {
  const {firstname, mobile, email} = data;

  return (
    <View style={styles.referral}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text style={{fontSize: 14, color: '#000'}}>{firstname}</Text>
        <Text>{email}</Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={{fontSize: 14}}>{mobile}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Icon name="settings" />
      </View>
    </View>
  );
};

// TODO this could be a flatlist
const ReferralContent = ({items}: {items: Referral[]}) => (
  <>
    {items.map((item: Referral) => (
      <ReferralItem data={item} key={item.firstname} />
    ))}
  </>
);

export default ReferralContent;

const styles = StyleSheet.create({
  referral: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
