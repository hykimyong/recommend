import React, { useEffect } from 'react'
import { FormLabel } from '@mui/material';
import RegisterBjItem from './RegisterBjItem';

const RecommendBj: React.FC = () => {
    

  return (
    <>
    <FormLabel>등록된 ID</FormLabel>
    {/* {recommendBjList.map((item, index)=>(<RegisterBjItem key={index} bjId={item.bjId} bjNick={item.bjNick}/>))} */}
    </>
  )
}

export default RecommendBj;