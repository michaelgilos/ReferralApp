import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {api} from '../../../services/axios.instance';
import {Referral} from '../../../types';

export const getAllReferrals = async () => {
  return (await api.get<Array<Referral>>('/referrals')).data;
};

export const useGetAllReferrals = (
  options?: UseQueryOptions<
    Array<Referral>,
    AxiosError,
    Array<Referral>,
    readonly [string]
  >,
) => {
  return useQuery({
    queryKey: ['all-referrals'],
    queryFn: getAllReferrals,
    ...options,
  });
};
