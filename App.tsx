/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Divider, Header, Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CreateReferral from './src/features/referrals/CreateReferral';
import ViewReferral from './src/features/referrals/ViewReferral';

export const queryClient = new QueryClient();

function App(): JSX.Element {
  const [index, setIndex] = useState(1);

  const colorActive = (active: boolean) => (active ? 'green' : '#000');

  return (
    <QueryClientProvider client={queryClient}>
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
              titleStyle={active => ({
                fontSize: 12,
                color: colorActive(active),
              })}
              icon={active => ({
                name: 'document-text-outline',
                type: 'ionicon',
                color: colorActive(active),
              })}
              containerStyle={{
                backgroundColor: '#fff',
              }}
            />
            <Tab.Item
              title="View"
              titleStyle={active => ({
                fontSize: 12,
                color: colorActive(active),
              })}
              icon={active => ({
                name: 'briefcase',
                type: 'ionicon',
                color: colorActive(active),
              })}
              containerStyle={{
                backgroundColor: '#fff',
              }}
            />
          </Tab>
        </View>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
