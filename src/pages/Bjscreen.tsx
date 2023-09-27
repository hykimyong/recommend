import * as React from 'react';
import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Base = styled.div`
  height: 333.6px; 
  width: 250.2px; 
  transform: scale(1.036);
`;

export default function Bjscreen() {
  return (
    <Base>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
          display: 'flex',
          alignItems: 'center',
          width: '100px'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="BjId" variant="standard" />
        
      </Box>
      <Button variant="contained">추가</Button>
      <Stack>
        
      </Stack>
    </Base>

  );
}
