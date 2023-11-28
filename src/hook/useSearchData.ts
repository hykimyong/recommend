import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { SearchApi } from '../apis/searchApi';
import { ISearch } from '../types/search';

const useSearchData = (keyword:string) =>
useQuery<AxiosResponse<ISearch>, Error>(
  ['search', { keyword }],
  () => (keyword ? SearchApi(keyword) : Promise.reject('Keyword is empty')),
  {
    enabled: keyword !== '' && keyword !== undefined, // 키워드가 비어 있거나 정의되지 않았을 때 API 호출 방지
  }
);

export default useSearchData;