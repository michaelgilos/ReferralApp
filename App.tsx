/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Divider, Header, Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CreateReferral from './src/referral/CreateReferral';
import ViewReferral from './src/referral/ViewReferral';

function App(): JSX.Element {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <View style={styles.container}>
        <View>
          <Header
            leftComponent={{
              icon: 'chevron-left',
            }}
            backgroundColor={'transparent'}
          />
          <Divider />
        </View>

        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{width: '100%'}}>
            <CreateReferral />
          </TabView.Item>
          <TabView.Item style={{width: '100%'}}>
            <ViewReferral />
          </TabView.Item>
        </TabView>

        <Tab
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={{
            backgroundColor: 'white',
            height: 3,
          }}
          variant="primary">
          <Tab.Item
            title="Create"
            titleStyle={{fontSize: 12, color: '#000'}}
            icon={{
              name: 'document-text-outline',
              type: 'ionicon',
              color: 'green',
            }}
          />
          <Tab.Item
            title="View"
            titleStyle={{fontSize: 12, color: '#000'}}
            icon={{name: 'briefcase', type: 'ionicon', color: 'green'}}
          />
        </Tab>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
