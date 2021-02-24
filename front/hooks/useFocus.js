import { useState } from 'react';
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChangeText = (text) => {
    setValue(text);
  };
  return [value, onChangeText, setValue];
};
export default useInput;
