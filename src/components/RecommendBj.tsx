import React, { useEffect, useState } from 'react'
import RegisterBjItem from './RegisterBjItem';
import { useStore } from '../store/scriptLoad';
import EmptyItem from './EmptyItem';

const RecommendBj: React.FC = () => {

  const { isTrue } = useStore();
  // const [recommendBjList,setRecommendBjList] = useState<{ bjId: string; bjNick: string }[]>([{bjId:"khm11903",bjNick:"봉준"},{bjId:"lshooooo",bjNick:"lee상호"},{bjId:"y1026",bjNick:"철구"},{bjId:"wnnw",bjNick:"남순"},{bjId:"devil0108",bjNick:"감스트"},{bjId:"rrvv17",bjNick:"킴성태"}]);
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
    {recommendBjList.length === 0 ? <EmptyItem/>:<></>}
    </>
  )
}

export default RecommendBj;