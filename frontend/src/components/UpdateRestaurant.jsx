import React,{useState, useEffect} from 'react'
import { Heading, Input, Select, Box, FormControl, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import { useParams, useHistory } from 'react-router-dom'
import RestaurantFinder from '../api/RestaurantFinder'

export default function UpdateRestaurant() {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [price_range, setPrice_range] = useState("")
    let history = useHistory()
    const { id } = useParams()

    const handleSubmit = async() => {
        try {
            await RestaurantFinder.put(`${id}`, {
                name,
                location,
                price_range
            })
            history.push('/')
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                await fetch(`https://yelp-relived-backend.herokuapp.com/api/v1/restaurants/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        setName(data.data.restaurants[0].name)
                        setLocation(data.data.restaurants[0].location)
                        setPrice_range(data.data.restaurants[0].price_range)
                        console.log(data)
                    })
            } catch (err) {
                throw err
            }
        }

        getRestaurants()
    }, [id])

    return (
        <div>
            <Heading as='h2' size='2xl' align='center' padding={3}>Update Details Of Restaurant</Heading>
            <Box p={4}>
                <FormControl variant='floating' id='name' isRequired>
                    <Input placeholder='' value={name} onChange={(e)=>setName(e.target.value)}/>
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel>Name</FormLabel>
                    <FormHelperText>Name of the restaurant</FormHelperText>
                </FormControl>
            </Box>
            <Box p={4}>
                <FormControl variant='floating' id='location' isRequired>
                    <Input placeholder='' value={location} onChange={(e) => setLocation(e.targe.value)} />
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel>Location</FormLabel>
                    <FormHelperText>Location of the restaurant</FormHelperText>
                </FormControl>
            </Box>
            <Box p={4}>
                <FormControl variant='floating' id='price_range' isRequired>
                    {/* <Input placeholder=' ' /> */}
                    <Select value={price_range} onChange={(e)=>setPrice_range(e.target.value)} >
                        <option value='1'>$</option>
                        <option value='2'>$$</option>
                        <option value='3'>$$$</option>
                        <option value='4'>$$$$</option>
                        <option value='5'>$$$$$</option>
                    </Select>
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel>Price Range</FormLabel>
                    <FormHelperText>What's the Price range '$' means very affordable and '$$$$$' means very expensive</FormHelperText>
                </FormControl>
            </Box>
            <Button size='lg' colorScheme='blue' type='submit' margin={4} onClick={handleSubmit}>Update</Button>

        </div >
    )
}
