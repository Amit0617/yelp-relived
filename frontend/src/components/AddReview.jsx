import { Stack, FormControl, Select, Input, FormLabel, FormHelperText, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../api/RestaurantFinder'

export default function AddReview() {
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [ratings, setRatings] = useState("")

    const { id } = useParams()

    const handleSubmit = async () => {
        try {
            const response = await RestaurantFinder.post('/${id}/addReview', {
                restaurant_id: id,
                name,
                ratings,
                reviews: reviewText
            })
            console.log(response)
            window.location.reload()
        } catch (error) {

        }
    }

    return (
        <>
            <Stack direction='row' p={4} spacing={6} >
                <FormControl variant='floating' id='location' isRequired>
                    <Input placeholder='' value={name} onChange={(e) => setName(e.target.value)} />
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel>Name</FormLabel>
                    <FormHelperText></FormHelperText>
                </FormControl>

                <FormControl variant='floating' id='price_range' isRequired>
                    {/* <Input placeholder=' ' /> */}
                    <Select value={ratings} onChange={(e) => setRatings(e.target.value)} >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Select>
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel>Rating</FormLabel>
                    <FormHelperText></FormHelperText>
                </FormControl>
            </Stack>
            <Stack margin={4} >
                <FormControl variant='floating' isRequired>
                    <Input size='md' value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder='Tell us about your experience' />
                    <FormLabel>Reviews</FormLabel>
                </FormControl>

            </Stack>
            <Button size='lg' colorScheme='blue' type='submit' margin={4} onClick={handleSubmit}>Add Review</Button>

        </>
    )
}
