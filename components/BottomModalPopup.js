import React from 'react';
import { View, Text } from 'react-native';
import {useBottomModal, Button, BottomModal, BottomModalRef } from 'react-native-lightning-modal';

export default function BottomModalPopup() {
 const { dismiss, show, modalProps } = useBottomModal();
  return (
    <View>
      <BottomModal  height={500} {...modalProps}>
       <Text>Hello</Text>
      </BottomModal>
    </View>
  );
}

