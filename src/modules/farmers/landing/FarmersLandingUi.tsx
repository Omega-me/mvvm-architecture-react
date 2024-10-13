'use client';
import React from 'react';
import { useFarmersLandingViewModel } from './useFarmersLandingViewModel';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const FarmersLanding: React.FC<Props> = () => {
  const vm = useFarmersLandingViewModel();

  return (
    <div>
      <input type="text" onChange={e => vm.onChangeName(e.target.value)} />
      <p>{vm.name}</p>
    </div>
  );
};

export default FarmersLanding;
