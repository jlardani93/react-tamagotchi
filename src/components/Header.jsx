import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/images/dino-background2.jpg'

export default function Header(){
  return(
    <div>
      <style jsx>{`
        .headerContainer {
          background-image: url(${backgroundImage});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center; 
          width: 100%;
          height: 500px;
          margin: 0px;
          margin-top: -17px;
          text-align: center;
          padding-top: 30px;
        }
        .navBar{
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          justify-items: center;
          background-color: #63ad22;
          box-shadow: 0 0 25px black;
          padding: 5px;
        }

        span {
          color: #f9ae0c;
          font-weight: bold;
          font-size: 18px;
          text-shadow: 0 0 3px black;
        }

        h1 {
          font-weight: bold;
          font-size: 40px;
          text-shadow: 0 0 5px yellow;
        }
      `}</style>
      <div className="headerContainer">
        <div>
          <h1>Tamagotchi!</h1>
        </div>
        <div className="navBar">
          <Link className="link" style={{ textDecoration: 'none' }} to='/'><span>Manage Dinos</span></Link>
          <Link className="link" style={{ textDecoration: 'none' }} to='/Admin'><span>Edit Dinos</span></Link>
        </div>
      </div>
    </div>
  )
}
