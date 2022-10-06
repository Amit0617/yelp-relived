import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../api/RestaurantFinder'
import StarRating from '../components/StarRating'
import { RestaurantContext, RestaurantContextProvider } from '../context/RestaurantContext'
// import { RestaurantContext } from '../context/RestaurantContext'

export default function RestaurantDetailsPage() {

  const { id } = useParams()
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`)
        // const response = 
        // await fetch(`http://localhost:3001/api/v1/restaurants/${id}`)
        // .then(response => response.json())
        // .then(data => console.log(data))
        // console.log(response.data.data.restaurants[0].name)
        setSelectedRestaurant(response.data.data.restaurants[0])
      } catch (error) {
        throw error
      }
    }

    getRestaurant()
  }, [])

  return (
    <div>
      {selectedRestaurant && selectedRestaurant.name}
      {<StarRating rating={3.2}/>}
    </div>
  )
}
