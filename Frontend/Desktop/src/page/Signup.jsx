import React from 'react';

import { useHistory } from 'react-router-dom';

import { newAccount } from "../lib/controller";
import { useState } from 'react';

export default function Signup(){

  const [user, setUser] = useState("");

  const [pass, setPass] = useState("");

  const move = useHistory();

  const toLogin = () => {
    move.push('/');
  }

  const atSignup = async () => {

    let sta = await newAccount(user, pass);

    if(sta === true){
      alert("Berhasil Signup");
      toLogin();
    }
    else{
      alert("Gagal Signup");
    }

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
              <input type="text" onChange={(e)=>{setUser(e.target.value)}} />
              
              <span>Password</span>
              <input type="password" className="pw" onChange={(e)=>{setPass(e.target.value)}} />

            </div>

          </div>

          <div className="row4">

            <button className="pri" onClick={atSignup}>Masuk ke Koperasi</button>            
            
            <button className="sec" onClick={toLogin} >Login untuk masuk</button>      
            

          </div>

        </div>

      </div>

    </div>

  );

}
