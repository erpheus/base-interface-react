import React from 'react'
import ReactDOM from 'react-dom'

import Wrappers from './Wrappers'


const bind_element = document.getElementById('react-bind')
const app = (<Wrappers></Wrappers>)
ReactDOM.render(app, bind_element)
