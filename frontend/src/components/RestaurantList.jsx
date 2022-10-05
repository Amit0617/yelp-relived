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
import { RestaurantContext } from '../context/RestaurantContext'

export default function RestaurantList(props) {

    const { restaurants, setRestaurants } = useContext(RestaurantContext)

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/restaurants/')
            .then(response => response.json())
            .then(data => setRestaurants(data.data.restaurants))
    }, [])


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
                                <Td>{restaurant.name}</Td>
                                <Td>{restaurant.location}</Td>
                                <Td>{'$'.repeat(restaurant.price_range)}</Td>
                                <Td>Ratings</Td>
                                <Td><Button size='md' colorScheme='orange'>Edit</Button></Td>
                                <Td><Button size='md' colorScheme='red'>Delete</Button></Td>
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
