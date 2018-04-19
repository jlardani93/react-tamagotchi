import React from 'react'
import Dino from './Dino'
import { Link } from 'react-router-dom'

export default function User(props){

  return(
    <div>
      <h2>Your Tamagotchis</h2>
      {Object.keys(props.dinos).map((dino, index) =>
        <Dino dino={dino} key={index} />
      )}
      <Link to="/Admin"><button>Add Dino!</button></Link>
    </div>
  );
}
