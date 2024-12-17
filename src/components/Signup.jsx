// import React from 'react'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Signup = () => {
  const [fname,setName]=useState('Harini');
  function changeValue(){
    setName('maya');
  }
  return (
    <Box
    component="form"
    style={{marginTop:'5%'}}
    sx={{
      '& .MuiTextField-root': { m: 3, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <h1>Welcome {fname} </h1>
    <div>
        <div>
          
      <TextField
        id="outlined-required"
        label="Name"
        defaultValue="Name"
      />
      <TextField
       
        id="outlined-disabled"
        label="Email"
        defaultValue="Email"
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        defaultValue="Password"
        autoComplete="current-password"
      />
      <TextField
        id="outlined-read-only-input"
        label="Confirm Password"
        defaultValue="Confirm Password"
      />
      </div>
      <TextField
        id="outlined-number"
        label="PhoneNumber"
        defaultValue="PhoneNumber"
    
       
      />
     <div>
     <Button onClick={changeValue}variant="outlined">SAVE</Button>
     </div>
    </div>
    </Box>
  )
}

export default Signup