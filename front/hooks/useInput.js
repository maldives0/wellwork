import { useState, useCallback } from 'react';
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChangeText = useCallback((text) => {
    setValue(text);
  }, []);
  const onResetText = useCallback(() => {
    setValue('');
  }, []);
  return [value, onChangeText, onResetText, setValue];
};
export default useInput;
