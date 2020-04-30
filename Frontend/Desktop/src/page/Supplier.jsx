import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';

import Sidebar from '../component/Sidebar';

import '../style/Supplier.css';

function Supplier(){

  const {toko} = useParams();

  const [tmpToko, ] = useState(toko);  

  return(
    
    <div className="BodSupplier">
      
      <Sidebar></Sidebar>

      <div className="container">

        <div className="row1">

          <div className="txtcontent1">
            <span className="txt-small">
              Kotakjualan.com
            </span>
          </div>

          <div className="txtcontent2">
            <span className="txt-head">
              Supplier Section
            </span>
          </div>

          <div className="txtcontent3">
            <span className="txt-small">
              This sections is part of complex system
              Kotakjualan.com, in this part you can input new Supplier
              for help you manage your supplier data.
            </span>
          </div>

        </div>

        <div className="row2">

                    

        </div>

        <div className="row3">

        </div>        

      </div>

    </div>

  );

}

export default Supplier;