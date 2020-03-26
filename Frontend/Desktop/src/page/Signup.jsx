import React from 'react';

import { useHistory } from 'react-router-dom';

export default function Signup(){

  const move = useHistory();

  const toLogin = () => {
    move.push('/');
  }

  return(

    <div className="BodSignup">

      <div className="box">

        <div className="container">          

          <div className="row2">

            <span className="txt l">SIGN UP</span>
            <span className="txt s" >
              Mulai lah kemudahan dengan melewati gerbang ini.
              Login dengan akun Toko-mu untuk mendapatkan kemudahan dalam mengelola toko-mu.
            </span>

          </div>          

          <div className="row3">

            <div className="form">
              
              <span>Username</span>
              <input type="text" />
              
              <span>Password</span>
              <input type="password" className="pw" />

            </div>

          </div>

          <div className="row4">

            <button className="pri">Masuk ke Koperasi</button>            
            
            <button className="sec" onClick={toLogin} >Login untuk masuk</button>      
            

          </div>

        </div>

      </div>

    </div>

  );

}