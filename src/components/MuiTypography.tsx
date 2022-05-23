import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 heading</Typography>
      <Typography variant='h2'>h2 heading</Typography>
      <Typography variant='h3'>h3 heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>h4 heading</Typography>
      <Typography variant='subtitle1'>Sub title 1</Typography>
      <Typography variant='subtitle2'>Sub title 2</Typography>
      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, labore. Assumenda quo eveniet dicta optio mollitia voluptatem perspiciatis minus delectus modi illum! Recusandae neque assumenda repellat doloribus necessitatibus nobis ipsa.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, labore. Assumenda quo eveniet dicta optio mollitia voluptatem perspiciatis minus delectus modi illum! Recusandae neque assumenda repellat doloribus necessitatibus nobis ipsa.</Typography>
    </div>
  )
}

export default MuiTypography

