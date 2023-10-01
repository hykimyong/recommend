import React, { useEffect } from 'react'
import { FormLabel } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';
import RegisterBjItem from './RegisterBjItem';
import { useStore } from '../store/scriptLoad';

const RegisterBj: React.FC = () => {
    const [recommendBjList, setRecommendBjList] = useLocalStorage<{ bjId: string; bjNick: string }[]>('recommendBjList', [])

    const { isTrue } = useStore();

    useEffect(() => {
        const storedData = localStorage.getItem('recommendBjList');
        if (storedData) {
            setRecommendBjList(JSON.parse(storedData));
        }
      }, []);

    useEffect(()=>{
      if(isTrue){
        console.log(recommendBjList,'전송');
        extensionSDK.broadcast.send("recommend-user",recommendBjList);
      }
    },[isTrue]);

  return (
    <>
    <FormLabel>등록된 ID</FormLabel>
    {recommendBjList.map((item, index)=>(<RegisterBjItem key={index} bjId={item.bjId} bjNick={item.bjNick}/>))}
    </>
  )
}

export default RegisterBj;