import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { SearchApi } from '../apis/searchApi';
import { ISearch } from '../types/search';

const useSearchData = (keyword:string) =>
useQuery<AxiosResponse<ISearch>, Error>(
  ['search', { keyword }],
  () => (keyword ? SearchApi(keyword) : Promise.reject('Keyword is empty')),
  {
    enabled: keyword !== '' && keyword !== undefined,
  }
);

export default useSearchData;