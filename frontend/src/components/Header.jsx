import React from 'react'
import { Heading, Box, Text } from '@chakra-ui/react'
import ToggleMode from './ToggleMode'
import Aare from './Aare-3.png';
import HomeBackground from './HomeBackground'
import styles from '../header.module.css'


export default function Header() {

    return (
        <>
            <ToggleMode />
            {/* <Box bgSize='cover'w='100%' h='100vh' bgImage='url("Aare-2.png")' /> */}
            <Box zIndex='hide' maxH='80vh' pos='relative' > 
            <img src={Aare}/>

            </Box>
            {/* <HomeBackground width='100vw' /> */}
            <Heading as='h1' className={styles.floating} fontSize='8xl' color='#463c74' padding='10' marginBottom='20'>Yelp!</Heading>

        </>
    )
}
