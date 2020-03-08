import React, { Suspense, lazy } from 'react';

import Sidebar from '../component/Sidebar';

import { FiSearch } from 'react-icons/fi';

const Box = lazy(()=>import('../side/boxTable'));

export default function Member(){  
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
            <div className="boxTable">

              <div className="wrap">

              <div className="row1">
                
                <div className="col">                    
                  <div className="input">                      
                    <select>
                      <option value="ni">NIK</option>
                      <option val ue="nm">Nama</option>
                      <option value="nk">NoKop</option>
                    </select>
                  </div>
                </div>

                <div className="col">                    
                  <div className="input">
                    <input type="text" />
                  </div>
                </div>

                <div className="col">                    
                  <div className="btn">
                    <button><FiSearch/></button>
                  </div>
                </div>

              </div>

              <div className="row2">

                <div className="itemHead">
                  <div className="nokop">
                    <span>NOKOP</span>
                  </div>
                  <div className="nik">
                    <span>NIK</span>
                  </div>  
                  <div className="idcard">
                    <span>IDCARD</span>
                  </div>
                  <div className="nama">
                    <span>NAMA</span>
                  </div>
                  <div className="sta">
                    <span>ACTION</span>
                  </div>
                </div>
               
                <Suspense fallback={<div>Loading..</div>}>
                  <Box></Box>
                </Suspense>

                </div>

              </div>            

            </div>
                      
            </div>

          </div>

        </div>


    </div>          

  )
}