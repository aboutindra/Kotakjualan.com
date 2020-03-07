import React from 'react';

import { FiX, FiUsers, FiHome, FiDatabase } from "react-icons/fi";

export default function Sidebar(){
  return(
    <div className="Sidebar">
      <div className="containerSide">
        
        <div className="wrap">
          <FiHome className="item"></FiHome>          
        </div>

        <div className="wrap">
          <FiDatabase className="item"></FiDatabase>          
        </div>

        <div className="wrap">
          <FiUsers className="item"></FiUsers>          
        </div>

        <div className="wrap">
          <FiX className="item"></FiX>          
        </div>

      </div>
    </div>
  )
}