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

import React, {useEffect} from 'react'

export default function RestaurantList() {
    
    useEffect(() => {
      fetch('http://localhost:3001/api/v1/restaurants/')
      .then(response => response.json())
      .then(data => console.log(data))
    }, [])
    

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='gray'>
                <TableCaption>Restaurants available near you</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Restaurant</Th>
                        <Th>Location</Th>
                        <Th isNumeric>Price Range</Th>
                        <Th>Ratings</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                        <Td>Ratings</Td>
                        <Td><Button size='md' colorScheme='orange'>Edit</Button></Td>
                        <Td><Button size='md' colorScheme='red'>Delete</Button></Td>

                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                        <Td>Ratings</Td>
                        <Td><Button size='md' colorScheme='orange'>Edit</Button></Td>
                        <Td><Button size='md' colorScheme='red'>Delete</Button></Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                        <Td>Ratings</Td>
                        <Td><Button size='md' colorScheme='orange'>Edit</Button></Td>
                        <Td><Button size='md' colorScheme='red'>Delete</Button></Td>
                    </Tr>
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
