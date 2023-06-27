import {useMutation} from '@tanstack/react-query';
import {queryClient} from '../../../../App';
import {api} from '../../../services/axios.instance';
import {Referral} from '../../../types';

export const createReferral = async (data: Referral) => {
  const {data: response} = await api.post('/referrals', data);
  return response.data;
};

export const useCreateReferral = () => {
  return useMutation({
    mutationFn: createReferral,
    mutationKey: ['add-referral'],
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['all-referrals']});
    },
  });
};
