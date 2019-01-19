import React from 'react'
import {BrowserRouter} from 'react-router-dom'

export default function Wrappers({ children }) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}
