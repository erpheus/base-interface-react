import React from 'react'
import ReactDOM from 'react-dom'

import Base from './sections/Base'
import Wrappers from './Wrappers'


const bind_element = document.getElementById('react-bind')
const app = (<Wrappers><Base /></Wrappers>)
ReactDOM.render(app, bind_element)
