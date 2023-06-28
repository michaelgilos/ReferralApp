import {Button, Icon, Text} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ModalSelector from 'react-native-modal-selector';

type RowsPerPageControllerProps = {
  listCount: number;
  onRowsSelected: (rows: number) => void;
};
const RowsPerPageController = ({
  listCount,
  onRowsSelected,
}: RowsPerPageControllerProps) => {
  const RowsPerPageItems = [
    {
      key: 1,
      label: 5,
    },
    {
      key: 2,
      label: 10,
    },
  ];
  const [rowsToDisplay, setRowsToDisplay] = useState(10);

  useEffect(() => {
    onRowsSelected(rowsToDisplay);
  }, [onRowsSelected, rowsToDisplay]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000'}}>Row per page:</Text>

        <ModalSelector
          data={RowsPerPageItems}
          initValue="Select..."
          supportedOrientations={['landscape']}
          accessible={true}
          scrollViewAccessibilityLabel={'Scrollable options'}
          cancelButtonAccessibilityLabel={'Cancel Button'}
          onChange={option => setRowsToDisplay(option.label)}>
          <Button
            title={`${rowsToDisplay}`}
            titleStyle={{color: '#000'}}
            type="clear"
            icon={{
              name: 'caret-down',
              type: 'font-awesome',
              size: 15,
            }}
            iconRight
          />
        </ModalSelector>
      </View>

      <Text style={{flex: 2, textAlign: 'center'}}>
        {`1-${rowsToDisplay}`} of {listCount}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Icon
          name="chevron-left"
          type="font-awesome"
          onPress={() => console.log('hello')}
        />
        <Icon
          name="chevron-right"
          type="font-awesome"
          onPress={() => console.log('hello')}
        />
      </View>
    </View>
  );
};

export default RowsPerPageController;
