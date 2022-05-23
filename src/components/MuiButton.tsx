import React from 'react'
import { Button,Stack,IconButton,ButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const MuiButton = () => {
  return (
      <Stack spacing={4}>
    <Stack spacing={2} direction ='row'>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='outlined' color='primary'>Primary</Button>
        <Button variant='outlined' color='secondary'>Secondary</Button>
        <Button variant='outlined' color='error'>Error</Button>
        <Button variant='outlined' color='warning'>Warning</Button>
        <Button variant='outlined' color='info'>Info</Button>
        <Button variant='outlined' color='success'>Success</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='text' color='primary'>Primary</Button>
        <Button variant='text' color='secondary'>Secondary</Button>
        <Button variant='text' color='error'>Error</Button>
        <Button variant='text' color='warning'>Warning</Button>
        <Button variant='text' color='info'>Info</Button>
        <Button variant='text' color='success'>Success</Button>
    </Stack>
    <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small' disableElevation onClick={() => alert('Clicked')}>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
        <IconButton aria-label='send' color='success' size='large'>
            <SendIcon/>
        </IconButton>
    </Stack>
    <Stack direction='row'>
        <ButtonGroup variant='outlined' orientation='vertical'>
        <Button > centre</Button>
        <Button > left</Button>
        <Button > right</Button>
        </ButtonGroup>
    </Stack>
    </Stack>
    
  )
}

export default MuiButton
