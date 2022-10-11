import React from 'react'
import { useColorMode, Button } from '@chakra-ui/react'
import DarkModeIcon from './DarkModeIcon'
import LightModeIcon from './LightModeIcon'

export default function ToggleMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button right='0' position='absolute' onClick={toggleColorMode}>
          {colorMode === 'light' ? <><DarkModeIcon width='20' /><span>Dark</span></> : <><LightModeIcon width='20'/><span>  Light</span></>}
        </Button>
      </header>
    )
  }