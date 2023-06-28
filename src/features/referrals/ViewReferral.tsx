import {Button, SearchBar, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import ReferralContent from './components/ReferralContent';
import RowsPerPageController from './components/RowsPerPageController';
import {useGetAllReferrals} from './hooks/useGetAllReferrals';

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

export default () => {
  const [search, setSearch] = useState('');

  const {data, isLoading} = useGetAllReferrals();

  console.log(data);

  const filtered = data
    ? data.filter(item => {
        if (search.match(/^-?\d+$/)) {
          return item.mobile?.includes(search);
        }

        return (
          item.firstname?.toLowerCase().includes(search) ||
          item.email?.toLowerCase().includes(search)
        );
      })
    : [];

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

        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            <ReferralContent items={filtered} />
            <RowsPerPageController listCount={filtered.length} />
          </>
        )}
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
