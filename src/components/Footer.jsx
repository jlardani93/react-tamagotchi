import React from 'react'

export default function Footer(){
  return(
    <div>
      <style jsx>{`
        .footer{
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 1;
          background-color: #63ad22;
          padding: 5px;
          box-shadow: 0 0 5px black; 
          text-align: center;
          color: white;
          text-shadow: 0px 0px 15px black;
          font-weight: bold;
          font-family: monospace;
        }

      `}</style>
      <p className="footer">Copyright (c) 2018 WeDOW.</p>
    </div>
  )
}
