import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import AddRestaurant from '../components/AddRestaurant'
import SearchBar from '../components/SearchBar'
export default function Home() {
  return (
    <div>
        <Header/>
        <SearchBar />
        <AddRestaurant/>
        <RestaurantList/>
    </div>
  )
}
