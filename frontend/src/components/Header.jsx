import React from 'react'
import { Heading, Stack } from '@chakra-ui/react'
import ToggleMode from './ToggleMode'

export default function Header() {
    
    return (
        <>
            <ToggleMode />
            <Heading as='h1' size='4xl' align='center' padding='10'>Yelp!</Heading>
            
        </>
    )
}
