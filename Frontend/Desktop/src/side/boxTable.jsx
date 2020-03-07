import React, { useState, useEffect } from 'react';

import { FiEdit, FiX } from 'react-icons/fi';

import { get } from '../lib/helper';

export default function BoxTable(){

  const [d, setD] = useState([]);

  const getAll = async () => {
    const temp = await get("/member/gm");    
    setD(temp);
  }

  useEffect(()=>{

    getAll();

  },[]);  

  return(
    <div>
      
      {

        d.map((e,i)=>

        <div className="item" key={i}>
        
          <div className="nokop">
            <span>{e.noKop}</span>
          </div>
          
          <div className="nik">
            <span>437</span>
          </div>  
          
          <div className="idcard">
            <span>881997001</span>
          </div>
          
          <div className="nama">
            <span>BAI SASTRA</span>
          </div>
          
          <div className="sta">
            <button><FiEdit></FiEdit></button>
            <button><FiX></FiX></button>
          </div>                    

        </div>

        )

      }   

    </div>
  )
}