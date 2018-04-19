import React from 'react'
import PropTypes from 'prop-types'

export default function Dino(props){
  return(
    <div>
      <h4>Dino Name: {props.dino.name}</h4>
    </div>
  )
}

Dino.propTypes = {
  dino: PropTypes.object
}
