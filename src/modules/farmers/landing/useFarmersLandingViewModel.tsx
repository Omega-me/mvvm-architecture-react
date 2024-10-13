import { useState } from 'react';

export const useFarmersLandingViewModel = () => {
  const [name, setName] = useState('');

  const onChangeName = (name: string) => {
    setName(name);
  };
  return {
    onChangeName,
    name,
  };
};
