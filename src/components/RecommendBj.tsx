import React, { useEffect } from 'react'
import { FormLabel } from '@mui/material';
import { IAuthInfo,IBroadInfo,IPlayerInfo } from '../types/extensionInterface';
import RegisterBjItem from './RegisterBjItem';
import { useStore } from '../store/scriptLoad';

const RecommendBj: React.FC = () => {

  const { isTrue } = useStore();
    
  useEffect(()=>{
    
    if(isTrue){
      console.log(extensionSDK);
      extensionSDK.handleInitialization((authInfo :IAuthInfo, broadInfo:IBroadInfo, playerInfo: IPlayerInfo)=>{
        extensionSDK.broadcast.listen(function(action : string, message :string, fromId:string){
          console.log(action,message,fromId);
            if(action === "recommend-user" && fromId !== ""){
              extensionSDK.broadcast.whisper(fromId, "recommend-user",{bjId:'d', bjNIck: 'nick'})
                // extensionSDK.broadcast.whisper(id, "lol-user-info-broad",{type:userRankType, tier: userTierData})
            }
          });
        })
      }
    },[isTrue]);

  return (
    <>
    <FormLabel>등록된 ID</FormLabel>
    {/* {recommendBjList.map((item, index)=>(<RegisterBjItem key={index} bjId={item.bjId} bjNick={item.bjNick}/>))} */}
    </>
  )
}

export default RecommendBj;