import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Text,
    Select,
    Input,
    InputLeftElement,
    HStack
} from '@chakra-ui/react'

import React, { useContext, useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import RestaurantFinder from '../api/RestaurantFinder'
import { RestaurantContext } from '../context/RestaurantContext'
import StarRating from './StarRating'
import LocationLogo from './LocationLogo'
export default function RestaurantList(props) {

    const { restaurants, setRestaurants } = useContext(RestaurantContext)
    const [_searchValue, setSearchValue] = useState("")
    const [_sortingValue, setSortingValue] = useState("2")

    let history = useHistory()

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                await fetch('https://yelp-relived-backend.herokuapp.com/api/v1/restaurants')
                    .then(response => response.json())
                    .then(data => setRestaurants(data.data.restaurants))
            } catch (err) {
                throw err
            }
        }

        getRestaurants()
    }, [setRestaurants])

    const handleDelete = async (id) => {
        try {
            await RestaurantFinder.delete(`${id}`)
            setRestaurants(restaurants.filter((restaurant) => {
                return restaurant.id !== id
            }))
        } catch (error) {
            throw error
        }
    }

    const handleRestaurantClick = (id) => {
        history.push(`restaurants/${id}`)
    }

    const handleUpdate = (id) => {
        history.push(`/restaurants/${id}/update`)
    }

    const sortCb = useCallback(
        (restaurantA, restaurantB) => {
            switch (_sortingValue) {
                case "2":
                    return restaurantA[0].localeCompare(restaurantB[0])
                case "3":
                    return restaurantB[0].localeCompare(restaurantA[0])
                case "1":
                default:
                    // return getTotalGroupSizes(restaurantB) - getTotalGroupSizes(restaurantA)
            }
        },
        [_sortingValue]
    )

    const filterCb = useCallback(
        (oAuthProvider) => {
            const name = oAuthProvider[0]

            return !_searchValue || name.includes(_searchValue.toLowerCase())
        },
        [_searchValue]
    )

    const renderRatings = (restaurant) => {

        if (!restaurant.rating_count) {
            return (
                <Text>0 reviews</Text>
            )
        }
        else {
            return (
                <>
                    <StarRating rating={restaurant.avg_rating} />
                    <span>({restaurant.rating_count})</span>
                </>
            )
        }

    }

    return (
        <>
            {/* <HStack justify="space-between" mt="80px" mb="10">
                <InputGroup maxWidth="250px">
                    <InputLeftElement pointerEvents="none">
                        <GoSearch color="gray" />
                    </InputLeftElement>
                    <Input
                        colorScheme="primary"
                        focusBorderColor="primary.500"
                        placeholder="Search"
                        value={_searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                </InputGroup> */}

                {/* Sort social networks in alphabetical or inverted order or with most members first */}
                {/* <Select
                    value={_sortingValue}
                    onChange={(event) => setSortingValue(event.target.value)}
                    maxWidth="250px"
                    focusBorderColor="primary.500"
                >
                    <option value="1">Most members</option>
                    <option value="2">A-Z</option>
                    <option value="3">Z-A</option>
                </Select> */}
            {/* </HStack> */}
            
            <TableContainer>
                <Table colorScheme='gray'>
                    <TableCaption>Restaurants available near you</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Restaurant</Th>
                            <Th>Location</Th>
                            <Th>Price Range</Th>
                            <Th>Ratings</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {restaurants && restaurants
                            // .sort(sortCB)
                            // .filter(filterCB)
                            .map((restaurant) => {
                                return (
                                    <Tr key={restaurant.id} spacing='6'>
                                        <Td cursor='pointer' onClick={() => handleRestaurantClick(restaurant.id)}>{restaurant.name}</Td>
                                        <Td>{restaurant.location}</Td>
                                        <Td>{'$'.repeat(restaurant.price_range)}</Td>
                                        <Td>{renderRatings(restaurant)}</Td>
                                        <Td><Button size='md' colorScheme='orange' onClick={() => handleUpdate(restaurant.id)}>Edit</Button></Td>
                                        <Td><Button size='md' colorScheme='red' onClick={() => handleDelete(restaurant.id)}>Delete</Button></Td>
                                    </Tr>
                                )
                            })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>

    )
}
