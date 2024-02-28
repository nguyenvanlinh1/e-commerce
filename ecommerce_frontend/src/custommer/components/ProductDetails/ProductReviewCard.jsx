import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = ( {item} ) => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item sx={1}>
                <Box>
                    <Avatar className='text-white' sx={{width: 56, height:56, bgcolor:"#9155fd"}}>
                        {item?.user?.firstName[0]}
                    </Avatar>
                </Box>
            </Grid>

            <Grid item sx={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold'>{item?.user?.lastName} {item?.user?.firstName}</p>
                        <p className='opacity-70'>{item?.createdAt.split("T")[0]}</p>
                    </div>
                </div>

                <Rating value={item?.rating} name='half-rating' readOnly precision={.5}/>
                <p>
                    {item?.review}
                </p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard