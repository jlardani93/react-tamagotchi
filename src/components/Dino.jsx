import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import DinoButtonPanel from './DinoButtonPanel'
import spritesheet from '../assets/images/spritesheet.png'

export default function Dino(props){

  function handleDisposeClick(){
    props.onDisposeDino(props.dino.key);
  }

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
          max-width: 250px;
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

        h5 {
          margin-top: 10px;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        h4 {
          margin-bottom: 0px;
          padding-bottom: 0;
        }

        .dinoHeading h5 {
          margin-top: 5px;
          margin-bottom: 10px;
        }

        progress {
          margin-bottom: 0;
        }

        .dinoImage {
          position: relative;
          height: 120px;
          width: 120px;
          background-color: white;
          border: 1px solid black;
          box-shadow: 0 0 5px black inset;
          border-radius: 10px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .image{
          width: 100%;
          height: 100%;
          position: absolute;
          repeat: none;
          overflow: hidden;
          background-size: 360px 360px;
          background-image: url(${spritesheet});
          background-position: ${props.dino.spriteSheetPosition};
        }

        .deathX {
          position: absolute;
          padding: 0px;
          margin: 0px;
          left: 30px;
          color: red;
          font-size: 100px;
          font-weight: bold;
        }

        button {
          background-color: red;
          color: white;
          font-size: 20px;
          font-weight: bold;
          border-radius: 10px;
          box-shadow: 0 0 10px black;
          border: 1px solid black;
          text-shadow: 0 0 2px black;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          cursor: pointer;
        }

        button:hover {
          box-shadow: 0 0 5px black;
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
        <div className="dinoImage">
          <div className="image">
          {(!props.dino.alive)
            ? <h1 className="deathX">X</h1>
            : <span></span>}
          </div>
        </div>
        <DinoButtonPanel dinoKey={props.dino.key} onIncreaseStat={props.onIncreaseStat}/>
        {(!props.dino.alive)
          ? <button className="disposeButton" onClick={handleDisposeClick}>Dispose Corpse</button>
          : <span></span>}
      </div>
    </div>
  )
}

Dino.propTypes = {
  dino: PropTypes.object,
  onIncreaseStat: PropTypes.func
}
