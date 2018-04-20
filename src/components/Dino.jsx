import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

export default function Dino(props){
  return(
    <div>
      <style jsx>{`
        .dinoCard {
          text-align: center;
        }
      `}
      </style>
      <div className="dinoCard">
        <h4>Dino Name: {props.dino.name}</h4>
        <h5>Age: {props.dino.birthTime}</h5>
        <hr/>
        <h5>Health: {props.dino.health}</h5>
        <h5>Satiety: {props.dino.satiety}</h5>
        <h5>Excitement: {props.dino.excitement}</h5>
        <h5>Energy: {props.dino.energy}</h5>
      </div>
    </div>
  )
}

Dino.propTypes = {
  dino: PropTypes.object
}
