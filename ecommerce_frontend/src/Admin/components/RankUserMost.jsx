import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const RankUserMost = () => {
  return (
    <div>
        <Box sx={{display:"flex", justifyContent:"space-between", my:3, position:"relative"}}>
            <Avatar className='text-items-center' src='https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png'></Avatar>
            <Box sx={{mr:10}}>
                <Typography variant='body1'>Men</Typography>
                <Typography className='flex' variant='caption'>Clothing, Footwear</Typography>
            </Box>
            <Typography variant='body1'>$18,496.65</Typography>
        </Box>
    </div>
  )
}

export default RankUserMost