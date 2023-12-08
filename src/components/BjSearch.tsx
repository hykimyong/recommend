import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteChangeReason } from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import useSearchData from '../hook/useSearchData';
import useMakeProfileImg from '../hook/makeProfileImg';
import { SuggestBj } from '../types/search';
import { useLocalStorage } from 'usehooks-ts';
import { IAuthInfo, IBroadInfo, IPlayerInfo } from '../types/extensionInterface';
import { useStore } from '../store/scriptLoad';

const BjSearch = () => {
    const [inputValue, setInputValue] = useState<string | null>(null);
    
    const { data, refetch } = useSearchData(inputValue);

    const makeProfileImg = useMakeProfileImg();

    const { isTrue } = useStore();

    const [recommendBjList, setRecommendBjList] = useLocalStorage<{ bjId: string; bjNick: string }[]>('recommendBjList', []);

    useEffect(()=>{
      
      if(isTrue){
        extensionSDK.handleInitialization((authInfo :IAuthInfo, broadInfo:IBroadInfo, playerInfo: IPlayerInfo)=>{
          extensionSDK.broadcast.listen(function(action : string, message :string, fromId:string){
              //유저측에서 리스트달라면 send
              if(action === "recommend-user-list"){
                extensionSDK.broadcast.send("recommend-user",recommendBjList);
              }
            });
          })
        }
      },[isTrue,recommendBjList]);

    useEffect(()=>{
      if(isTrue){
        extensionSDK.broadcast.send("recommend-user",recommendBjList);
      }
    },[recommendBjList,isTrue]);

    
    useEffect(() => {
        if (inputValue !== null) {
            refetch({ queryKey: ['search', { keyword: inputValue }] });
        }   
    }, [inputValue, refetch]);

    const handleInputChange = (event: React.ChangeEvent<{}>, value: string) => {
        setInputValue(value);
    };

    const handleChange = (
      event: React.ChangeEvent<{}>,
      value: SuggestBj,
      reason: AutocompleteChangeReason
    ) =>{
      if(reason === "selectOption"){
        const isBjIdDuplicate = recommendBjList.some(item => item.bjId === value.user_id);
        if (!isBjIdDuplicate) {
          setRecommendBjList([...recommendBjList, {bjId:value.user_id, bjNick : value.user_nick}]);
        }
      }
    }

    return (
      <>
        {(
          <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={data ? data.data.suggest_bj : []}
          autoHighlight
          getOptionLabel={(option) => option.user_nick}
          isOptionEqualToValue={(option, value) => option.user_id === value.user_id}
          onInputChange={handleInputChange}
          onChange={(event, value, reason) => handleChange(event, value, reason)}
          renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                  loading="lazy"
                  width="20"
                  src={makeProfileImg(option.user_id)}
                  alt=""
              />
              {option.user_nick}
              </Box>
          )}
          renderInput={(params) => (
              <TextField
              {...params}
              label="닉네임을 입력하세요"
              inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
              }}
              />
          )}
          />
        )}
      </>
        
    );
}

export default BjSearch;