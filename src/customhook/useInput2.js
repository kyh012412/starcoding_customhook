import { useState } from 'react';

//커스텀 훅도 use라는 키워드로 시작하는 것이 좋다.
/**
 *
 * @param {String} initialValue 초기값
 * @param {Function} submitAction 하고싶은 행동
 * @returns
 */
export function useInput2(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue('');
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmit];
}
