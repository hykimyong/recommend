import { useQuery, UseQueryResult, QueryObserverSuccessResult } from 'react-query';
import { AxiosResponse } from 'axios';
import { SearchApi } from '../apis/searchApi';
import { ISearch } from '../types/search';

const useSearchData = (keyword:string) =>
  useQuery<AxiosResponse<ISearch>, Error>(['species', { keyword }], () => SearchApi(keyword));

export default useSearchData;