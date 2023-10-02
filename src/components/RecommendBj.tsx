import React, { useEffect } from 'react'
import { FormLabel } from '@mui/material';
import { IAuthInfo,IBroadInfo,IPlayerInfo } from '../types/extensionInterface';
import RegisterBjItem from './RegisterBjItem';
import { useStore } from '../store/scriptLoad';

const RecommendBj: React.FC = () => {

  const { isTrue } = useStore();
    
  useEffect(()=>{
    
    if(isTrue){
        extensionSDK.broadcast.listen(function(action : string, message :string, fromId:string){
          console.log(action,message,fromId);
        });
      }
    },[isTrue]);

  return (
    <>
    <FormLabel className='Mui-error'>등록된 ID1</FormLabel>
    {/* {recommendBjList.map((item, index)=>(<RegisterBjItem key={index} bjId={item.bjId} bjNick={item.bjNick}/>))} */}
    </>
  )
}

export default RecommendBj;