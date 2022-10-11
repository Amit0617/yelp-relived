import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../api/RestaurantFinder'
import AddReview from '../components/AddReview'
import Reviews from '../components/Reviews'
import StarRating from '../components/StarRating'
import { RestaurantContext } from '../context/RestaurantContext'
import { Heading, Stack, Text } from '@chakra-ui/react'
import PizzaOutline from '../components/Pizza_Outline'

export default function RestaurantDetailsPage() {

  const { id } = useParams()
  // const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext)



  useEffect(() => {
    const getRestaurant = async () => {
      try {
        await RestaurantFinder.get(`/${id}`)
          .then(response => {
            // setSelectedRestaurant(prevData => ({...response.data.data,}))
            setSelectedRestaurant(response.data.data)
            console.log(response.data.data)
          })
      } catch (error) {
        throw error
      }
    }
    getRestaurant()
  }, [id, setSelectedRestaurant])

  return (
    <div>
      <Stack align='center' spacing='4' margin={4} direction='column'>
        <Heading >{selectedRestaurant?.restaurants[0]?.name}</Heading>
        <Stack align='center' direction='row'>
          {selectedRestaurant?.ratings[0]?.rating_count
            ? <>
              <StarRating rating={selectedRestaurant?.ratings[0].avg_rating} />
              <Text>({selectedRestaurant?.ratings[0].rating_count})</Text>
            </>
            : <Text>No reviews</Text>}
        </Stack>
      </Stack>
      <AddReview />

      {/* If selectedRestaurant not null only then iterate reviews */}
      {selectedRestaurant?.ratings[0]?.rating_count
        ? <Reviews reviews={selectedRestaurant?.reviews || []} />
        : <Stack spacing={-5} margin='10' align='center'><PizzaOutline opacity={0.5} /><Heading size='2xl' zIndex='banner' color='#FFD56B' opacity={0.4}>Cook Some Reviews Here</Heading></Stack>}
        </div>
  )
}
