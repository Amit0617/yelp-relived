import React from 'react'
import { Heading, Box, Text, Stack, Flex, Spacer } from '@chakra-ui/react'
import ToggleMode from './ToggleMode'
import Aare from './Aare-3.png';
import HomeBackground from './HomeBackground'
import styles from '../header.module.css'


export default function Header() {

    return (
        <>
            <ToggleMode />
            {/* <Box bgSize='cover'w='100%' h='100vh' bgImage='url("Aare-2.png")' /> */}
            {/* <Box maxH='65vh' pos='relative' >  */}
            {/* <img src={Aare}/> */}

            {/* </Box> */}
            {/* <Stack spacing={4} direction='row'> */}
            <Box bg='#fdf4e0'>
                <Flex>
                    <Stack direction='column' padding='14'>
                        <Heading as='h1' className={styles.floating} fontSize={{ base: '35px', md: '70px', lg: '90px', xl: '110px' }} position='relative' color='#463c74' marginBottom='20'>Yelp!</Heading>
                        <Text color='#463c74' as='samp' >About</Text>
                        <Text color='#463c74' as='samp'>Contact Us</Text>
                        <Text color='#463c74' as='samp'>Reviews</Text>
                    </Stack>
                    <Spacer />
                    <HomeBackground position='absolute' top='0' width='70vw' />
                </Flex>
            </Box>
            {/* </Stack> */}

        </>
    )
}
