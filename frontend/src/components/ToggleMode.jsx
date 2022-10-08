import React from 'react'
import { useColorMode, Button } from '@chakra-ui/react'

export default function ToggleMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button right='0' position='absolute' onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    )
  }