import React, { Suspense, lazy } from 'react';

import Sidebar from '../component/Sidebar';

import Loader from '../component/Loader';

import { useState } from 'react';

const Box = lazy(()=>import('../side/BoxTable'));

export default function Member(){  

  const [nik, setNik] = useState(0);

  const [nama, setNama] = useState("");

  const [lahir, setLahir] = useState("");

  const [plant, setPlant] = useState("");

  const [dept, setDept] =  useState("")

  const [shop, setShop] = useState("");  

  return(
    <div className="BodMember">

      <Sidebar></Sidebar>      

      <div className="container">                

        <div className="col1">
          <div className="wrapAdd">

            <div className="boxAdd">
              
              <div className="wrap">

                <div className="txtHead">
                  <p>Daftarkan diri anda untuk menjadi anggota.</p>
                </div>

                <span>NIK</span>
                <div className="input">
                  <input type="number" />  
                </div>              

                <span>NAMA</span>
                <div className="input">
                  <input type="text" />  
                </div>

                <span>TANGGAL LAHIR</span>
                <div className="input">
                  <input type="date" />  
                </div>
                
                <span>PLANT</span>
                <div className="input">
                  <select>
                    <option value="">Choose..</option>
                  </select>
                </div>

                <span>DEPARTMENT</span>
                <div className="input">
                  <select>
                    <option value="">Choose..</option>
                  </select>
                </div>

                <span>SHOP</span>
                <div className="input">
                  <select>
                    <option value="">Choose..</option>
                  </select>
                </div>

                <div className="btn">
                  <button>Save to member</button>
                </div>

              </div>


            </div>            

          </div>
        </div>

        <div className="col2">

          <div className="wrapTable">

            <div className="txtHead">
              <span>Halaman anggota</span>
            </div>

            <div className="txtContent">
              <span>
                Halaman ini akan mempermudah mu untuk mengakases seluruh fitur
                yang berkaitan dengan data anggota dengan sangat efisien dan cepat.
              </span>
            </div>                        
            
            <Suspense fallback={<Loader></Loader>}>
              <Box></Box>
            </Suspense>
                      
            </div>

          </div>

        </div>


    </div>          

  )
}