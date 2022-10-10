import React from 'react'
import { Heading, Stack } from '@chakra-ui/react'
import ToggleMode from './ToggleMode'
import HomeBackground from './HomeBackground'

export default function Header() {
    
    return (
        <>
            <ToggleMode />
            <div backgroudColor='orange'>
            {/* <HomeBackground width='100vw' /> */}
            <Heading as='h1' size='4xl' color='#FF7B54' align='center' padding='10'>Yelp!</Heading>
            </div>
        </>
    )
}
