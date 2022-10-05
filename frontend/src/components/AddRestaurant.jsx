import React from 'react'
import { Input } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import AddButton from './AddButton'

export default function className() {
    return (
        <HStack  spacing={5} align='center'>
            <Input placeholder='name' />
            <Input placeholder='location' />
            <Select placeholder='$'>
                <option value='1'>$</option>
                <option value='2'>$$</option>
                <option value='3'>$$$</option>
                <option value='4'>$$$$</option>
                <option value='5'>$$$$$</option>
            </Select>
            <Button size='lg' colorScheme='blue'>Add</Button>
        </HStack>
    )
}
