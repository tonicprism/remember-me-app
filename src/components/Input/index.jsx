import React, { useState, useEffect } from 'react';

import { TextInput, View, Text } from 'react-native';

import styles from './styles';

function Input({
  placeholder,
  onChangeText,
  defaultValue,
  maxLength,
  keyboardType,
  clearTextOnFocus,
  style,
}) {
  return (
    <View>
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        defaultValue={defaultValue}
        multiline={true}
        numberOfLines={3}
        maxLength={maxLength}
        keyboardType={keyboardType}
        clearTextOnFocus={true}
      />
    </View>
  );
}

export default Input;
