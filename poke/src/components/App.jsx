import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from '../pages/Home'
import PokemonCard from './PokemonCard'

const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/:id' component={PokemonCard}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App