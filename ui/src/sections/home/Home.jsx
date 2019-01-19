import React from 'react'

import CenteredImage from '~/components/centered-image'


export default function Home() {
  return (
    <React.Fragment>
      <h1>Hola</h1>
      <CenteredImage src="/astronaut.jpg" style={{maxWidth: '80%'}} />
    </React.Fragment>
  )
}
