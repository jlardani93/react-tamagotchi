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
      <form onSubmit={handleFormSubmit}>
        <label>Dino Name</label>
        <input type='text'
          ref={(input)=>{_name = input}}
          required></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )

}

DinoCreate.propTypes = {
  onNewDino: PropTypes.func.isRequired
}
