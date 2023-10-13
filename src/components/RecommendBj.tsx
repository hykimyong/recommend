import React, { useEffect, useState } from 'react'
import RegisterBjItem from './RegisterBjItem';
import { useStore } from '../store/scriptLoad';

const RecommendBj: React.FC = () => {

  const { isTrue } = useStore();
  const [recommendBjList,setRecommendBjList] = useState<{ bjId: string; bjNick: string }[]>([]);
    
  useEffect(()=>{
    
    if(isTrue){
        extensionSDK.broadcast.listen(function(action : string, message : { bjId: string; bjNick: string }[], fromId:string){
          if(action ==="recommend-user"){
            setRecommendBjList(message);
          }
        });
        extensionSDK.broadcast.send("recommend-user-list");
      }
    },[isTrue]);

  return (
    <>
    {recommendBjList.map((item, index)=>(<RegisterBjItem key={index} bjId={item.bjId} bjNick={item.bjNick} display={false}/>))}
    {recommendBjList.length === 0 ? <>empty</>:<></>}
    </>
  )
}

export default RecommendBj;