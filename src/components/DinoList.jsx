import React from 'react'
import Dino from './Dino'
import PropTypes from 'prop-types'

export default function DinoList(props){

  return(
    <div>
      <style jsx>{`
        .dinoList {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-column-gap: 15px;
        }
      `}</style>
      <div className="dinoList">
        {Object.values(props.dinos).map((dino)=>
          <Dino dino={dino} key={dino.key} onIncreaseStat={props.onIncreaseStat}/>
        )}
      </div>
    </div>
  )
}

DinoList.propTypes = {
  dino: PropTypes.object,
  onIncreaseStat: PropTypes.func
}
