import React from 'react'
import FooterOneComponent from "./FooterOneComponent"
import FooterTwoComponent from "./FooterTwoComponent"
import { Box, Flex, Spacer, Stack, Text, Button, Link } from "@chakra-ui/react"

export default function Footer() {
    return (
        <div>
            <Box bg='#547a87'>
                <Flex>
                    <FooterOneComponent />
                    <Spacer />
                    <FooterTwoComponent />
                </Flex>
                <Stack direction='column' padding='20'>
                    <Text color='#fff'>Careers</Text>
                    <Text color='#fff'>Testimonials</Text>
                    <Text color='#fff'>HeadQuarters</Text>
                    <Text as='samp' noOfLines={[3, 4, 5]} fontSize={{ base: '15px', md: '30px', lg: '50px', xl: '60px' }} textDecor='Highlight' color='#fff'>Links will take you nowhere, just for some filling purposes. Get your website beautifully crafted by me!</Text>
                    <Button><Link href='mailto:amitmishra0617@gmail.com' isExternal>
                        Mail Me
                    </Link></Button>
                </Stack>
            </Box>
        </div>
    )
}
