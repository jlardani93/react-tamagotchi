import React from 'react'
import PropTypes from 'prop-types'

export default function DinoButtonPanel(props){

  function handleButtonPress(attribute) {
    console.log(attribute);
  }

  return(
    <div>
      <style>
        {`
          .buttonPanel {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            justify-items: center;
          }

          .button {
            border: 1px solid black;
            border-radius: 3px;
            background-color: lightblue;
            cursor: pointer;
          }

          .button:hover {
            border: 1px dotted black;
          }

          .button p {
            padding: 2px;
            margin: 0;
          }
          `}
      </style>
      <div className="buttonPanel">
        <div className="button" onClick={()=>props.onIncreaseStat(props.dinoKey, 'health')}>
          <p>Heal</p>
        </div>
        <div className="button" onClick={()=>props.onIncreaseStat(props.dinoKey, 'satiety')}>
          <p>Feed</p>
        </div>
        <div className="button" onClick={()=>props.onIncreaseStat(props.dinoKey, 'excitement')}>
          <p>Play</p>
        </div>
        <div className="button" onClick={()=>props.onIncreaseStat(props.dinoKey, 'energy')}>
          <p>Rest</p>
        </div>
      </div>
    </div>
  )
}

DinoButtonPanel.propTypes = {
  onIncreaseStat: PropTypes.func,
  dinoKey: PropTypes.string
}
