import React from 'react'
import Home from './routes/Home'
import { ChakraProvider } from '@chakra-ui/react'
import RestaurantDetailsPage from './routes/RestaurantDetailsPage'
import UpdatePage from './routes/UpdatePage'
import { RestaurantContextProvider } from './context/RestaurantContext'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function App() {
    return (
        <ChakraProvider>
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
