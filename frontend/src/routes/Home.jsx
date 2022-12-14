import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import AddRestaurant from '../components/AddRestaurant'
import SearchBar from '../components/SearchBar'
import { Stack, Box } from '@chakra-ui/react'
import SvgChef from '../components/SvgChef'
import Restaurant from '../components/Restaurant'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header />

      {/* <SearchBar /> */}
      <Box padding='10' position='relative'>
        <AddRestaurant />
        <Stack direction='row' position='relative' zIndex="hide" maxH='1'>
          <SvgChef opacity={0.3} /><Restaurant opacity={0.3} />
        </Stack>

        <RestaurantList />
      </Box>
      <Footer/>
    </>
  )
}
