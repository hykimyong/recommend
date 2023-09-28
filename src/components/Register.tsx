import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormLabel } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';


const Register: React.FC = () => {

    const bjIdRef = useRef<HTMLTextAreaElement>();
    const bjNickRef = useRef<HTMLTextAreaElement>();

    const handleInputChange = () => {
        const inputValue = bjIdRef.current?.value || '';
        if (!/^[a-zA-Z0-9]+$/.test(inputValue)) {
            alert('영문과 숫자만 입력가능합니다.');
          bjIdRef.current!.value = inputValue.replace(/[^a-zA-Z0-9]/g, '');
        }
      };
    
    const [recommendBjList, setRecommendBjList] = useLocalStorage<{ bjId: string; bjNick: string }[]>('recommendBjList', [])

    const handleClick = ()=>{
        if(!bjIdRef.current?.value){
            alert('아이디를 입력하세요');
        }else if(!bjNickRef.current?.value){
            alert('비제이의 닉네임을 입력하세요');
        }else{
            setRecommendBjList([...recommendBjList, {bjId:bjIdRef.current?.value, bjNick : bjNickRef.current?.value}]);
            bjIdRef.current.value = "";
            bjNickRef.current.value = "";
        }
    }

  return (
    <>
    <FormLabel>BJ아이디 등록하기</FormLabel>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField inputRef ={bjIdRef} onChange={handleInputChange} id="standard-basic" label="아이디" variant="standard" />
        <TextField inputRef ={bjNickRef} id="standard-basic" label="닉네임" variant="standard" />
        <Button variant="contained" onClick={handleClick}>추가</Button>  
      </Box>
      <br/><br/>
      </>
  )
}

export default Register;