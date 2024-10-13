import { IPageParams } from '@/common/interfaces';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface IViewModelConfig {
  pageParams: IPageParams;
}

export const useFarmersDetailViewModel = (config: IViewModelConfig) => {
  const [route, setRoute] = useState('');
  const router = useRouter();
  const onChangeId = (id: string) => {
    setRoute(id);
  };

  const onGoToNewRoute = () => {
    router.push(route);
  };
  return {
    id: config.pageParams.params.id,
    onChangeId,
    route,
    onGoToNewRoute,
  };
};
