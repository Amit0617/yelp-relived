import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import AddRestaurant from '../components/AddRestaurant'
export default function Home() {
  return (
    <div>
        <Header/>
        <AddRestaurant/>
        <RestaurantList/>
    </div>
  )
}
