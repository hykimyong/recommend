import React, { useRef, useEffect } from 'react'
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

    const { isTrue } = useStore();

    const handleInputChange = () => {
        const inputValue = bjIdRef.current?.value || '';
        if (!/^[a-zA-Z0-9]+$/.test(inputValue)) {
            alert('영문과 숫자만 입력가능합니다.');
          bjIdRef.current!.value = inputValue.replace(/[^a-zA-Z0-9]/g, '');
        }
      };
    
    const [recommendBjList, setRecommendBjList] = useLocalStorage<{ bjId: string; bjNick: string }[]>('recommendBjList', []);

    useEffect(()=>{
      
      if(isTrue){
        extensionSDK.handleInitialization((authInfo :IAuthInfo, broadInfo:IBroadInfo, playerInfo: IPlayerInfo)=>{
          extensionSDK.broadcast.listen(function(action : string, message :string, fromId:string){
              if(action === "recommend-user" && fromId !== ""){
                extensionSDK.broadcast.whisper(fromId, "recommend-user",{bjId:'d', bjNIck: 'nick'})
                  // extensionSDK.broadcast.whisper(id, "lol-user-info-broad",{type:userRankType, tier: userTierData})
              }
            });
          })
        }
      },[isTrue]);

    const handleClick = ()=>{
        if(!bjIdRef.current?.value){
            alert('아이디를 입력하세요');
        }else if(!bjNickRef.current?.value){
            alert('비제이의 닉네임을 입력하세요');
        }else{
            setRecommendBjList([...recommendBjList, {bjId:bjIdRef.current?.value, bjNick : bjNickRef.current?.value}]);
            extensionSDK.broadcast.send("recommend-user",{bjId:bjIdRef.current?.value, bjNick: bjNickRef.current?.value});
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