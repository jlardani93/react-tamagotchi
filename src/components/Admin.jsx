import React from 'react'
import DinoList from './DinoList'
import DinoCreate from './DinoCreate'
import PropTypes from 'prop-types'

export default function Admin(props){

  return(
    <div>
      <style jsx>{`
        .adminContainer {
          box-shadow: 0 0 25px black;
          border-top: 2px solid black;
          border-bottom: 2px solid black;
          padding: 0;
          background-color: lightyellow;
          padding: 20px;
        }
      `}</style>
      <div className="adminContainer">
        <DinoList onIncreaseStat={props.onIncreaseStat}
           dinos={props.dinos}
           onDisposeDino={props.onDisposeDino}/>
        <DinoCreate onNewDino={props.onNewDino}/>
      </div>
    </div>
  )
}

Admin.propTypes = {
  onNewDino: PropTypes.func.isRequired,
  onIncreaseStat: PropTypes.func.isRequired
}
