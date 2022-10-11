import React, {useState, useContext} from 'react'
import { Input } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import RestaurantFinder from '../api/RestaurantFinder'
import { RestaurantContext } from '../context/RestaurantContext'
// import addRestaurants from '../context/RestaurantContext'
import AddButton from './AddButton'

export default function AddRestaurant() {
    const {addRestaurants} = useContext(RestaurantContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price_range, setPrice_range] = useState("")

    const handleSubmit = async() => {
        try{
            const response = await RestaurantFinder.post('/', {
                name,
                location,
                price_range
            })
            addRestaurants(response.data.data.restaurant[0])
            console.log(response)
        }catch(err){
            throw err
        }
    }

    return (
        <HStack  spacing={5} align='center' margin={6}>
            <Input placeholder='Name' boxShadow='md' rounded='lg' onChange={(e)=> setName(e.target.value)} value={name}/>
            <Input placeholder='Location' boxShadow='md' rounded='lg' onChange={(e)=> setLocation(e.target.value)} value={location}/>
            <Select placeholder='Price range' boxShadow='md' rounded='lg' onChange={(e)=> setPrice_range(e.target.value)} value={price_range}>
                <option value='1'>$</option>
                <option value='2'>$$</option>
                <option value='3'>$$$</option>
                <option value='4'>$$$$</option>
                <option value='5'>$$$$$</option>
            </Select>
            <Button leftIcon={<AddButton/>} size='md' boxShadow='md' rounded='lg' colorScheme='blue' onClick={handleSubmit} padding={6} type='submit'>Add</Button>
        </HStack>
    )
}
