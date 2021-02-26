import React, { useRef } from 'react';
import { Input } from 'react-native-elements';

const AuthInput = ({
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'none',
  returnKeyType = 'done',
  onChangeText,
  onSubmitEditing,
  iconLeft,
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
  const ref_input = [];
  ref_input[0] = useRef();
  ref_input[1] = useRef();
  ref_input[2] = useRef();
  ref_input[3] = useRef();
  const focusNext = (index) => {
    if (index < ref_input.length - 1) {
      ref_input[index + 1].current.focus();
    }
    if (index == ref_input.length - 1) {
      ref_input[index].current.blur();
    }
  };
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
      onSubmitEditing={() => focusNext}
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
