import React from 'react'
import Dino from './Dino'
import { Link } from 'react-router-dom'
import DinoList from './DinoList'
import PropTypes from 'prop-types'

export default function User(props){

  return(
    <div>
      <style jsx>{`
        .userContainer {
          box-shadow: 0 0 25px black;
          border-top: 2px solid black;
          border-bottom: 2px solid black;
          padding: 0;
          background-color: lightyellow;
          padding: 20px;
        }

        h2 {
          text-align: center;
          font-size: 30px;
          margin: 0px;
        }

        button {
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          background-color: #63ad22;
          color: white;
          font-size: 20px;
          font-weight: bold;
          border-radius: 10px;
          box-shadow: 0 0 10px black;
          border: 1px solid black;
          text-shadow: 0 0 1px black;
          cursor: pointer; 
        }

        button:hover {
          box-shadow: 0 0 5px black;
        }
      `}</style>
      <div className="userContainer">
        <h2>Your Tamagotchis</h2>
        <DinoList dinos={props.dinos} onIncreaseStat={props.onIncreaseStat}/>
        <Link to="/Admin" style={{textDecoration: 'none'}}><button>Add Dino!</button></Link>
      </div>
    </div>
  )
}

User.propTypes = {
  dinos: PropTypes.object,
  onIncreaseStat: PropTypes.func
}
