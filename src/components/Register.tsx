import React, { useRef, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormLabel } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';
import { IAuthInfo,IBroadInfo,IPlayerInfo } from '../types/extensionInterface';
import { useStore } from '../store/scriptLoad';


const Register: React.FC = () => {

    const bjIdRef = useRef<HTMLTextAreaElement>();
    const bjNickRef = useRef<HTMLTextAreaElement>();
    const [invalidCheckText, setInvalidCheckText] = useState("");
    

    const { isTrue } = useStore();

    const handleInputChange = () => {
        const inputValue = bjIdRef.current?.value || '';
        if (!/^[a-zA-Z0-9]+$/.test(inputValue)) {
          setInvalidCheckText("아이디는 영문과 숫자만 입력가능합니다.");
          bjIdRef.current!.value = inputValue.replace(/[^a-zA-Z0-9]/g, '');
        }else{
          setInvalidCheckText("");
        }
      };
    
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

    const handleClick = ()=>{
        if(recommendBjList.some(item => item.bjId === bjIdRef.current?.value)){
          setInvalidCheckText('이미등록된 아이디입니다.');
        }else if(!bjIdRef.current?.value){
          setInvalidCheckText('아이디를 입력해주세요.');
        }else if(!bjNickRef.current?.value){
          setInvalidCheckText('비제이 닉네임을 입력해주세요');
        }else{
            setRecommendBjList([...recommendBjList, {bjId:bjIdRef.current?.value, bjNick : bjNickRef.current?.value}]);
            bjIdRef.current.value = "";
            bjNickRef.current.value = "";
            setInvalidCheckText("");
        }
    }

  return (
    <>
    <FormLabel>추천하는 BJ를 입력해주세요</FormLabel>
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
      <br/>
      {invalidCheckText && <FormLabel className='Mui-error'>{invalidCheckText}</FormLabel>}
      <br/>
      </>
  )
}

export default Register;