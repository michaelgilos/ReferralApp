import {Button, Icon, SearchBar, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Referral} from '../types';

const Header = () => (
  <View style={styles.header}>
    <View style={{flex: 3}}>
      <Text style={{fontSize: 14}}>NAME</Text>
    </View>
    <View style={{flex: 2}}>
      <Text style={{fontSize: 14}}>PHONE</Text>
    </View>
    <View style={{flex: 1}}>
      <Text style={{fontSize: 14}}>ACTIONS</Text>
    </View>
  </View>
);

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

export default () => {
  const [search, setSearch] = useState('');

  const data: Referral[] = [
    {
      firstname: 'Justin Biebs',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
    {
      firstname: 'Levy Ackerman',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
    {
      firstname: 'Mikasa Ackerman',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
    {
      firstname: 'Itachi Uchiha',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
    {
      firstname: 'Ichigo Kurosaki',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
    {
      firstname: 'Monkey D. Luffy',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
    {
      firstname: 'Kaido',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
    {
      firstname: 'Big Mom',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
    {
      firstname: 'Roger',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
    {
      firstname: 'Shanks',
      email: 'example@email.com',
      mobile: '0436-283-2938',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h4 h4Style={{marginTop: 10, marginHorizontal: 10}}>
          View records
        </Text>

        <View style={styles.searchContainer}>
          <Button
            title="Filter"
            type="outline"
            disabled
            radius={'md'}
            icon={{
              name: 'filter',
              type: 'font-awesome',
              size: 20,
              color: 'green',
            }}
            iconContainerStyle={{marginRight: 10}}
          />

          <SearchBar
            platform="android"
            containerStyle={{flex: 1, marginLeft: 10}}
            inputContainerStyle={{backgroundColor: '#ccc', borderRadius: 10}}
            inputStyle={{fontSize: 16, color: '#000'}}
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
          />
        </View>

        <Header />

        <ReferralContent items={data} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
  },
  referral: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
