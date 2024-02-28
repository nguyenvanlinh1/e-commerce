import styled from '@emotion/styled'
import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'


const TrignImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})
const Achivement = () => {
  return (
    <Card className='' sx={{position:"relative", bgcolor: "#443C68", color:"white"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                Nguyen Van Linh
            </Typography>
            <Typography variant='body2'>
                Congratulations 😜
            </Typography>
            <Typography variant='h5' sx={{my:3.1}}>
                999.9k
            </Typography>
            <Button size='small' variant='contained'>
                View Sales
            </Button>
            <TrignImg src=''></TrignImg>
            <TrophyImg src='https://th.bing.com/th/id/R.4c4e267241acf46b1ddc06fc898e03cc?rik=5ihhjUgvEAgs9A&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1259936.png&ehk=W5WdPim3lQj%2fsc0MYzcfnystw6ge5dTmsk6mxsAupcU%3d&risl=&pid=ImgRaw&r=0'></TrophyImg>
        </CardContent>
    </Card>
  )
}

export default Achivement