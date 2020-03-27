import React from 'react';

import {useHistory} from 'react-router-dom';

import { checkAccount } from '../lib//controller';


import { useState } from 'react';

export default function Login(){

  const [user, setUser] = useState("");

  const [pass, setPass] = useState("");

  const move = useHistory();

  const toRegis = () => {
    move.push('/r');
  }

  const atLogin = async () => {

    let sta =  await checkAccount(user, pass);

    if(sta){
      alert("Success Login");
    }
    else{
      alert("Gagal Login");
    }

  }

  return(

    <div className="BodLogin">

      <div className="box">

        <div className="container">          

          <div className="row2">

            <span className="txt l">LOG IN</span>
            <span className="txt s" >
              Mulai lah kemudahan dengan melewati gerbang ini.
              Login dengan akun Toko-mu untuk mendapatkan kemudahan dalam mengelola toko-mu.
            </span>

          </div>          

          <div className="row3">

            <div className="form">
              
              <span>Username</span>
              <input type="text" onChange={(e)=>setUser(e.target.value)} />
              
              <span>Password</span>
              <input type="password" className="pw" onChange={(e)=>setPass(e.target.value)} />

            </div>

          </div>

          <div className="row4">

            <button className="pri" onClick={atLogin} >Masuk ke Koperasi</button>            
            
            <button className="sec" onClick={toRegis} >Buat Akun</button>      
            

          </div>

        </div>

      </div>

    </div>

  );

}