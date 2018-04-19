import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

export default function DinoCreate(props){
  let _name = null;

  function handleFormSubmit(event){
    event.preventDefault();
    console.log("Your dino's name is: " + _name.value);
    let newDino = {
      name: _name.value,
      health: 100,
      satiety: 100,
      energy: 100,
      excitement: 100,
      key: v4()
    }
    console.log(newDino); 
    props.onNewDino(newDino);
    _name.value = '';
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

  DinoCreate.propTypes = {
    onNewDino: PropTypes.func.isRequired
  }
}
