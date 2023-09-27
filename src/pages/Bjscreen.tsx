import * as React from 'react';
import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FormLabel } from '@mui/material';

const Base = styled.div`
  text-align: center;
`;

export default function Bjscreen() {
  return (
    <Base>
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
        <TextField id="standard-basic" label="아이디" variant="standard" />
        <TextField id="standard-basic" label="닉네임" variant="standard" />
        <Button variant="contained">추가</Button>  
      </Box>
      <br/><br/>
      <FormLabel>등록된 ID</FormLabel>
    </Base>

  );
}
