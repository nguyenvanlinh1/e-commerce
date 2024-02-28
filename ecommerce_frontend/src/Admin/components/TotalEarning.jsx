import { Box, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RankUserMost from './RankUserMost';

const TotalEarning = () => {
  return (
    <div>
        <Card className='h-[500px]' sx={{bgcolor: "#443C68", color:"white"}}>
            <CardHeader
                title="Total Earning"
                action={
                    <IconButton>
                        <MoreVertIcon sx={{bgcolor: "#443C68", color:"white"}}/>
                    </IconButton>
                }
            />
            <CardContent>
                <Box sx={{display: "flex", alignItems:"center"}}>
                    <Typography variant='h4'>$24,895 </Typography>
                    <Typography className='text-green-500'><ArrowDropUpIcon/> 10% </Typography>
                </Box>
                <Typography sx={{mt:2}} variant='body2'>Compared to $84,324 last year</Typography>

                {[1, 1, 1 , 1].map((item) => <RankUserMost/>)}
            </CardContent>
        </Card>
    </div>
  )
}

export default TotalEarning