import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import Base from './sections/Base'


const Wrappers = ({ children }) => {
  return (
    <BrowserRouter>
        <Base />
    </BrowserRouter>
  )
}

export default hot(Wrappers)
