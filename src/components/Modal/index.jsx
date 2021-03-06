import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Modal from 'react-native-modal';

import styles from './styles';

function _Modal({ isVisible, children, onPress, swipeDirection, style }) {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onPress}
      swipeDirection={swipeDirection}
      avoidKeyboard={true}
      onBackdropPress={onPress}
      backdropColor="#000000"
      backdropOpacity={0.1}
    >
      <View onPress={onPress} style={[styles.modalWrapper, style]}>
        {children}
      </View>
    </Modal>
  );
}

export default _Modal;
