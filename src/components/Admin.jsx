import React from 'react'
import DinoList from './DinoList'
import DinoCreate from './DinoCreate'
import PropTypes from 'prop-types'

export default function Admin(props){

  return(
    <div>
      <DinoList dinos={props.dinos}/>
      <DinoCreate onNewDino={props.onNewDino}/>
    </div>
  )
}

Admin.propTypes = {
  onNewDino: PropTypes.func.isRequired
}
