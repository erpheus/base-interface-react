import React from 'react'

import './centered-image.css'

export default function CenteredImage(props) {
  return (
    <div className="centered-image-container">
      <img {...props}/>
    </div>
  )
}
