import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Moment from 'moment'

export default function DinoCreate(props){
  let _name = null

  function handleFormSubmit(event){
    event.preventDefault()
    console.log('Your dino\'s name is: ' + _name.value)
    let newDino = {
      name: _name.value,
      alive: true,
      health: 100,
      satiety: 100,
      energy: 100,
      excitement: 100,
      birthMoment: new Moment(),
      birthTime: null,
      age: 0,
      key: v4(),
      className: "dinoCard"
    }
    console.log(newDino)
    console.log(newDino.birthTime)
    props.onNewDino(newDino)
    _name.value = ''
  }

  return(
    <div>
      <style jsx>{`
        form {
          display: flex;
          padding: 20px;
          justify-content: center;
        }

        button {
          background-color: #63ad22;
          color: white;
          font-size: 20px;
          font-weight: bold;
          border-radius: 10px;
          box-shadow: 0 0 10px black;
          border: 1px solid black;
          text-shadow: 0 0 1px black;
          margin-left: 20px;
        }

        button:hover {
          box-shadow: 0 0 5px black;
        }

        input {
          height: 15px;
          margin-left: 20px;
          margin-top: 5px;
          box-shadow: 0 0 2px black inset;
        }

        label {
          margin-top: 3px;
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>Dino Name:</label>
          <input type='text'
            ref={(input)=>{_name = input}}
            required></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )

}

DinoCreate.propTypes = {
  onNewDino: PropTypes.func.isRequired
}
