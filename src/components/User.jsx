import React from 'react'
import Dino from './Dino'
import { Link } from 'react-router-dom'
import DinoList from './DinoList'

export default function User(props){

  return(
    <div>
      <h2>Your Tamagotchis</h2>
      <DinoList dinos={props.dinos}/>
      <Link to="/Admin"><button>Add Dino!</button></Link>
    </div>
  )
}
