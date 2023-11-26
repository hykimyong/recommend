import { useQuery, UseQueryResult, QueryObserverSuccessResult } from 'react-query';
import { SearchApi } from '../apis/searchApi';
import { ISearch } from '../types/search';


const useSearchData = (keyword:string): UseQueryResult<ISearch, Error> => {
  const result = useQuery<ISearch, Error>(`search${keyword}`, SearchApi(keyword));
    console.log(result);
  return result as QueryObserverSuccessResult<ISearch, Error>;
};

export default useSearchData;