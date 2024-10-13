'use client';
import { IPageParams } from '@/common/interfaces';
import React from 'react';
import { useFarmersDetailViewModel } from './useFarmersDetailViewModel';

interface Props {
  pageParams: IPageParams;
}

const FarmersDetail: React.FC<Props> = props => {
  const { pageParams } = props;
  const vm = useFarmersDetailViewModel({ pageParams });

  return (
    <div>
      {vm.id}
      <input type="text" onChange={e => vm.onChangeId(e.target.value)} />
      <p>new route {vm.route}</p>
      <button type="button" onClick={vm.onGoToNewRoute}>
        change page
      </button>
    </div>
  );
};

export default FarmersDetail;
