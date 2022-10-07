import React from 'react'
import StarRating from './StarRating'
import { Box, Heading, Text, Stack } from '@chakra-ui/react'

function Feature({ name, review, rating }) {
    return (
        <Box p={5} shadow='md' borderWidth='1px'>
            <Stack direction='row'>
                <Heading fontSize='xl'>{name}</Heading>
                <Heading size='sm' align='right' ><StarRating rating={rating} /></Heading>
            </Stack>
            <Text mt={4}>{review}</Text>
        </Box>
    )
}
export default function Reviews({ reviews }) {
    return (
        <div>
            <Stack margin={5} direction='column'>
                {reviews && reviews.map((review) => {
                    return (
                            <Feature
                                key={review.id}
                                name={review.name}
                                review={review.reviews}
                                rating={review.ratings}
                            />
                    )
                })}
            </Stack>
        </div>
    )
}
