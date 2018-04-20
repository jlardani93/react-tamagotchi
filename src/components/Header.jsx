import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return(
    <div>
      <style jsx>{`
        .navBar{
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          justify-items: center;
          background-color: lightblue;
        }
      `}</style>
      <div>
        <h1>Tamagotchi!</h1>
      </div>
      <div className="navBar">
        <Link to='/'>Manage Dinos</Link>
        <Link to='/Admin'>Edit Dinos</Link>
      </div>
    </div>
  )
}
