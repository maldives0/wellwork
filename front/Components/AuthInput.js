import React, { useCallback, useState } from 'react';
import { Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const AuthInput = ({
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'none',
  returnKeyType = 'done',
  onChangeText,
  onSubmitEditing,
  iconLeft = {},
  iconRight,
  autoFocus = false,
  autoCorrect = true,
  value,
  errorMessage,
  secureTextEntry = false,
  clearTextOnFocus = true,
  ref,
  blurOnSubmit = false,
}) => {
  return (
    <Input
      ref={ref}
      style={{ padding: 16, fontSize: 20 }}
      errorStyle={{ color: 'red', fontSize: 16 }}
      errorMessage={errorMessage}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      leftIcon={iconLeft}
      rightIcon={iconRight}
      returnKeyType={returnKeyType}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      onSubmitEditing={onSubmitEditing}
      autoCorrect={autoCorrect}
      value={value}
      secureTextEntry={secureTextEntry}
      clearTextOnFocus={clearTextOnFocus}
      autoFocus={autoFocus}
      blurOnSubmit={blurOnSubmit}
    />
  );
};

export default AuthInput;
