import {
    Table,
    Thead,
    Tbody,
    // Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
} from '@chakra-ui/react'

import React, { useContext, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import RestaurantFinder from '../api/RestaurantFinder'
import { RestaurantContext } from '../context/RestaurantContext'

export default function RestaurantList(props) {

    const { restaurants, setRestaurants } = useContext(RestaurantContext)
    let history = useHistory()

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                await fetch('http://localhost:3001/api/v1/restaurants/')
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

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='gray'>
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
                    {restaurants && restaurants.map((restaurant) => {
                        return (
                            <Tr key={restaurant.id} spacing='6'>
                                <Td cursor='pointer' onClick={() => handleRestaurantClick(restaurant.id)}>{restaurant.name}</Td>
                                <Td>{restaurant.location}</Td>
                                <Td>{'$'.repeat(restaurant.price_range)}</Td>
                                <Td>Ratings</Td>
                                <Td><Button size='md' colorScheme='orange' onClick={() => handleUpdate(restaurant.id)}>Edit</Button></Td>
                                <Td><Button size='md' colorScheme='red' onClick={() => handleDelete(restaurant.id)}>Delete</Button></Td>
                            </Tr>
                        )
                    })}
                </Tbody>
                {/* <Tfoot> */}
                {/* <Tr> */}
                {/* <Th>To convert</Th> */}
                {/* <Th>into</Th> */}
                {/* <Th isNumeric>multiply by</Th> */}
                {/* </Tr> */}
                {/* </Tfoot> */}
            </Table>
        </TableContainer>
    )
}
