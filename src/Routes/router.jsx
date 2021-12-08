import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ImageGallery } from '../Presentation/Pages'

const Router = () => { 
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ImageGallery} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Router