import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import DinoButtonPanel from './DinoButtonPanel'

export default function Dino(props){
  return(
    <div>
      <style jsx>{`
        .dinoCard {
          text-align: center;
          border: 2px solid black;
          border-radius: 10px;
          padding: 10px;
          margin-top: 30px;
          background-color: #f9ae0c;
          box-shadow: 0 0 5px black;
          margin-right: 15px;
        }

        .dead {
          background-image: url("https://thumbs.dreamstime.com/b/white-skulls-seamless-background-crossed-bones-pattern-black-tile-92044131.jpg");
          background-size: 200px 200px;
          background-opacity: 0.2;
        }

        .dinoHeading {
          background-color: white;
          border: 1px solid black;
          box-shadow: 0 0 5px inset;
          border-radius: 10px;
        }
      `}
      </style>
      <div className={props.dino.className}>
        <div className="dinoHeading">
          <h4>Dino Name: {props.dino.name}</h4>
          <h5>Age: {props.dino.birthTime}</h5>
        </div>
        <hr/>
        <h5>Health: {props.dino.health}</h5>
        <progress value={props.dino.health} max="100"></progress>
        <h5>Satiety: {props.dino.satiety}</h5>
        <progress value={props.dino.satiety} max="100"></progress>
        <h5>Excitement: {props.dino.excitement}</h5>
        <progress value={props.dino.excitement} max="100"></progress>
        <h5>Energy: {props.dino.energy}</h5>
        <progress value={props.dino.energy} max="100"></progress>
        <DinoButtonPanel dinoKey={props.dino.key} onIncreaseStat={props.onIncreaseStat}/>
      </div>
    </div>
  )
}

Dino.propTypes = {
  dino: PropTypes.object,
  onIncreaseStat: PropTypes.func
}
