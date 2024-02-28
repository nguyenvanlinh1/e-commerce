import { Grid, Rating } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ReviewProductCard = ( {product}) => {

  return (
    <div className='border rounded-s-md shadow-md ml-20 h-[85%]'>
        <Grid container xs={12} sx={{p:'50px 10px 0'}} spacing={2}>
            <Grid item xs={5}>
                <div className='h-[115%]'>
                    <img className='object-cover object-top w-full h-full' src={product?.product?.imageUrl} alt="" />
                </div>
            </Grid>
            <Grid item xs={7}>
                <p className='font-normal text-lg'>{product?.product?.title}</p>
                <p className='text-gray-500 my-4'>{product?.product?.brand}</p>
                <p className='text-green-500'>{product?.product?.price}$</p>
                <p className="my-4">Color: {product?.product?.color}</p>
                <p className='my-10 flex items-center'>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
                    <span className='text-gray-500 mx-3'>42954 Ratings</span>
                    <span className='text-blue-700'>3543 Reviews</span>
                </p>
                <p className='font-semibold'>
                    <span className='text-green-700'><FiberManualRecordIcon sx={{width:"15px", height:"15px"}} /></span> Delivered on {product?.product?.createdAt.split("T")[0]}
                </p>
                <p className='text-sm'>Your Item Has Been Delivered</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ReviewProductCard