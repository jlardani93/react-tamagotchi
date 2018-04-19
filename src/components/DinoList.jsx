import React from 'react'
import Dino from './Dino'

export default function DinoList(props){

  return(
    <div>
      {Object.values(props.dinos).map((dino)=>
        <Dino dino={dino} key={dino.key}/>
      )}
    </div>
  )
}
