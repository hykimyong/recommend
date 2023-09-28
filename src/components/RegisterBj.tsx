import React, { useEffect } from 'react'
import { FormLabel } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';
import RegisterBjItem from './RegisterBjItem';

const RegisterBj: React.FC = () => {
    const [recommendBjList, setRecommendBjList] = useLocalStorage<{ bjId: string; bjNick: string }[]>('recommendBjList', [])

    useEffect(() => {
        const storedData = localStorage.getItem('recommendBjList');
        if (storedData) {
            setRecommendBjList(JSON.parse(storedData));
        }
      }, []);

  return (
    <>
    <FormLabel>등록된 ID</FormLabel>
    {recommendBjList.map((item)=>(<RegisterBjItem bjId={item.bjId} bjNick={item.bjNick}/>))}
    </>
  )
}

export default RegisterBj;