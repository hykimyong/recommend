import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import useSearchData from '../hook/useSearchData';
import useMakeProfileImg from '../hook/makeProfileImg';
import { SuggestBj } from '../types/search';

const BjSearch = () => {
    const [inputValue, setInputValue] = useState<string | null>(null);
    
    const { data, refetch } = useSearchData(inputValue);

    const makeProfileImg = useMakeProfileImg();
    
    useEffect(() => {
        if (inputValue !== null) {
            refetch({ queryKey: ['search', { keyword: inputValue }] });
        }   
    }, [inputValue, refetch]);

    const handleInputChange = (event: React.ChangeEvent<{}>, value: string) => {
        setInputValue(value);
    };

    const handleChange = (event: React.ChangeEvent<{}>, value: SuggestBj) =>{
      console.log(event);
      console.log(value.user_id);
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
          onChange={handleChange}
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