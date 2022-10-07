import React from 'react'
import StarSolid from './StarSolid'
import StarHalf from './StarHalf'
import StarEmpty from './StarEmpty' 

export default function StarRating({rating}) {
    const stars = []
    for(let i=1; i<=5;i++){
        if(i <= rating){
            stars.push(<StarSolid key={i}/>)
        }
        else if( i === Math.ceil(rating) && ! Number.isInteger(rating)){
            stars.push(<StarHalf key={i}/>)
        }
        else{
            stars.push(<StarEmpty key={i}/>)
        }
    }
  return (
    <>{stars}</>
    )
}
