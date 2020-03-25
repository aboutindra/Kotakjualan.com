import React from 'react';

import {useHistory} from 'react-router-dom';

import {apiLogin} from '../lib/api';

import { useState } from 'react';

export default function Login(){

  const [user, setUser] = useState("");

  const [pass, setPass] = useState("");

  const move = useHistory();

  const toRegis = () => {
    move.push('/r');
  }

  const atLogin = async () => {

    await checkAccount(user, pass);

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

async function checkAccount(user, pass){
  
  let format = {
    u: user,
    p: pass
  }

  let temp = await apiLogin(format);

  console.log(temp);

  if(temp){
    alert("Success login");
  }
  else{
    alert("Gagal login");
  }

}