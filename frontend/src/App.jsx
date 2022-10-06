import React from 'react'
import Home from './routes/Home'
import {
    ChakraProvider,
    extendTheme,
} from '@chakra-ui/react'
import RestaurantDetailsPage from './routes/RestaurantDetailsPage'
import UpdatePage from './routes/UpdatePage'
import { RestaurantContextProvider } from './context/RestaurantContext'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const activeLabelStyles = {
    transform: 'scale(0.85) translateY(-24px)',
}
export const theme = extendTheme({
    components: {
        Form: {
            variants: {
                floating: {
                    container: {
                        _focusWithin: {
                            label: {
                                ...activeLabelStyles,
                            },
                        },
                        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
                        {
                            ...activeLabelStyles,
                        },
                        label: {
                            top: 0,
                            left: 0,
                            zIndex: 2,
                            position: 'absolute',
                            backgroundColor: 'white',
                            pointerEvents: 'none',
                            mx: 3,
                            px: 1,
                            my: 2,
                            transformOrigin: 'left top'
                        },
                    },
                },
            },
        },
    },
})

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <RestaurantContextProvider>
                <Router>
                    {/* switch was deprecated in version 6 */}
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/restaurants/:id/update' component={UpdatePage} />
                        <Route exact path='/restaurants/:id' component={RestaurantDetailsPage} />
                    </Switch>
                </Router>
            </RestaurantContextProvider>
        </ChakraProvider>

    )
}
