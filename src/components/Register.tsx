import React from 'react'
import Box from '@mui/material/Box';
import { FormLabel } from '@mui/material';
import BjSearch from './BjSearch';


const Register: React.FC = () => {

    

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
        <BjSearch/>
      </Box>
      <br/>
      </>
  )
}

export default Register;