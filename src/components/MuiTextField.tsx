import React from 'react'
import { Stack,TextField,InputAdornment} from '@mui/material'
import { useState } from 'react'

const MuiTextField = () => {
  const[value,setValue] =  useState('');
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Small Secondary' size='small' color='secondary' variant='outlined'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form Input' 
             variant='outlined'
             required
            value={value} onChange={(e) => setValue(e.target.value)} 
            error={!value}
            helperText={
              !value ? 'Required':'Do not share your password with anyone'
            }
              />
            <TextField label='Password' type='password' helperText='do not share this' variant='outlined'/>
        </Stack>

        <Stack direction='row' spacing={2}>
          <TextField label='amount' InputProps={{
          startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}/>
          <TextField label='weight' InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}/>
        </Stack>
    </Stack>
  )
}

export default MuiTextField
