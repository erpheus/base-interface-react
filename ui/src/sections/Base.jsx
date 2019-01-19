import React from 'react'
import {Route} from 'react-router-dom'

import './base.css'

import Home from './home/Home'

export default function Base() {
  return (
    <React.Fragment>
      <Route exact={true} path="/" component={Home}/>
    </React.Fragment>
  )
}
