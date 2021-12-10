import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ImageGallery,ImageGalleryDetail } from '../Presentation/Pages'

const Router = () => { 
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ImageGallery} exact />
        <Route path='/:title' component={ImageGallery} exact />
        <Route path='/imagem/:title' component={ImageGalleryDetail} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Router