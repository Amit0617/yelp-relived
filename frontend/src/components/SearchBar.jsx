import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import React from 'react'
import MagnifyingGlass from "./MagnifyingGlass"

export default function SearchBar() {
  return (
    <div >
      <InputGroup align='center'>
      <InputLeftElement align='center' children={<MagnifyingGlass/>}  />
        <Input maxW="67%" placeholder='Search Restaurants...' margin={20} boxShadow='2xl' borderRadius='3xl' p='6' />
      </InputGroup>
    </div>
  )
}
