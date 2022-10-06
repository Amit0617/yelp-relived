import React from 'react'
import StarSolid from './StarSolid'
import StarHalf from './StarHalf'
import StarEmpty from './StarEmpty' 

export default function StarRating({rating}) {
    const stars = []
    for(let i=1; i<=5;i++){
        if(i <= rating){
            stars.push(<StarSolid/>)
        }
        else if( i === Math.ceil(rating) && ! Number.isInteger(rating)){
            stars.push(<StarHalf/>)
        }
        else{
            stars.push(<StarEmpty/>)
        }
    }
  return (
    <>{stars}</>
    )
}
