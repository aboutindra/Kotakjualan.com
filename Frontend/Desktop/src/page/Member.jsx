import React, { Suspense, lazy, useEffect } from 'react';

import Sidebar from '../component/Sidebar';

import Loader from '../component/Loader';

import { useState } from 'react';

import async from 'async';

import { getAllPlant, getAllDept, getAllShop, insertMember } from '../lib/api';

import { loadMember } from '../lib/io';

const Box = lazy(()=>import('../side/BoxTable'));

export default function Member(){  

  const [nik, setNik] = useState(0);

  const [nama, setNama] = useState("");

  const [lahir, setLahir] = useState("");

  const [plant, setPlant] = useState([]);

  const [dept, setDept] =  useState([])

  const [datDept, setDatDept] = useState([]);

  const [shop, setShop] = useState([]);  

  const [datShop, setDatShop] = useState([]);

  const [optPlant, setOptPlant] = useState("");

  const [optDept, setOptDept] = useState("");

  const [optShop, setOptShop] = useState("");  

  const [txtBtn, setTxtBtn] = useState("Save to Member");

  const atLoad = () => {
    
    async.parallel({

      getPlant : async () => {
        let temp = await getAllPlant();
        setPlant(temp);
      },

      getDept : async () => {
        let temp = await getAllDept();
        setDept(temp);
      },
      
      getShop : async () => {
        let temp = await getAllShop();
        setShop(temp);
      }


    }, (err)=>{                

    });

  }

  useEffect(()=>{

    atLoad();

  },[]);

  const filterDept = () => {

    let tempDept = dept;

    let temp = [];

    let tempShop = shop;

    let temp2 = [];

    let tempOpt = optPlant.toString().split(",");

    let opt = tempOpt[0];    

    tempDept.forEach((e)=>{

      let tempId = e.idPlant.toString();      

      if(tempId === opt){
        temp.push(e);        
      }

    });

    tempShop.forEach((e)=>{

      let tempId = e.idPlant.toString();

      if(tempId === opt){
        temp2.push(e);
      }

    });

    setDatDept(temp);

    setDatShop(temp2);

  }

  useEffect(()=>{

    filterDept();

  },[optPlant]);

  const filterShop = () => {

    let tempShop = datShop;

    let temp = [];

    let tempOpt = optDept.toString().split(",");

    let opt = tempOpt[0];

    tempShop.forEach((e)=>{
      let tempId = e.idDept.toString();
      if(tempId === opt){
        temp.push(e);
      }
    });

    setDatShop(temp);

  }

  useEffect(()=>{

    filterShop();

  },[optDept]);  

  const clearAll = () => {

    let lenInput = document.getElementsByTagName("input").length;

    let lenSelect = document.getElementsByTagName("select").length;

    let i = 0;  

    while(i<lenInput){

      document.getElementsByTagName("input")[i].value = "";

      i++;

    }

    i = 0;

    while(i<lenSelect){

      document.getElementsByTagName("select")[i].value = "-1";

      i++;

    }    
    

  }

  const checkInput = () => {
    
    if(nik === "" || nik === undefined){
      return false;
    }
    else if(nama === "" || nama === undefined){
      return false;
    }
    else if(lahir === "" || lahir === undefined){
      return false;
    }
    else if(optPlant === "-1" || optPlant === -1 || optDept === "-1" || optDept === -1 || optShop === "-1" || optShop === -1){
      return false;
    }
    
    return true;

  }

  const formatedInput = () => {

    let resNik = parseInt(nik);

    let tempNama = nama;

    let resNama = tempNama.toUpperCase();        

    let tempLahir = lahir;

    let forLahir = new Date(tempLahir);

    let day = forLahir.getDate();

    let mon = forLahir.getMonth() + 1;

    let yer = forLahir.getFullYear();

    let resLahir = `${day}/${mon}/${yer}`;    

    let resPlant = optPlant.split(",");

    let resDept = optDept.split(",");

    let resShop = optShop.split(",");

    let format = [{"nik":resNik}, {"nama":resNama}, {"shop":resShop[1]}, {"dept":resDept[1]}, {"plant":resPlant[1]}, {"tglLahir":resLahir}];

    return format;

  }

  const atClick = async () => {
    
    setTxtBtn("Loading..");

    if(checkInput()){      

      let frm = formatedInput();

      console.log(frm);

      let temp = await insertMember(frm);

      if(temp){
        alert("Succes");
        clearAll();   
        loadMember();     
      }
      else{
        alert("Gagal");
      }

    }
    else{
      alert("Field masih belum lengkap");
      clearAll();
    }

    setTxtBtn("Save to Member");

  }

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
                  <input type="number" onChange={(e)=>setNik(e.target.value)} />  
                </div>              

                <span>NAMA</span>
                <div className="input">
                  <input type="text" onChange={(e)=>setNama(e.target.value)} />  
                </div>

                <span>TANGGAL LAHIR</span>
                <div className="input">
                  <input type="date" onChange={(e)=>setLahir(e.target.value)} />  
                </div>
                
                <span>PLANT</span>
                <div className="input">
                  <select onChange={(e)=>setOptPlant(e.target.value)}>
                    <option value="-1">Choose..</option>
                    {
                      plant.map((e,i)=>                        
                        <option key={i} value={[e.id, e.name]}>{e.name}</option>
                      )
                    }
                  </select>
                </div>

                <span>DEPARTMENT</span>
                <div className="input">
                  <select onChange={(e)=>setOptDept(e.target.value)}>
                    <option value="-1">Choose..</option>
                    {
                      datDept.map((e,i)=>
                        <option key={i} value={[e.id, e.name]}>{e.name}</option>
                      )
                    }
                  </select>
                </div>

                <span>SHOP</span>
                <div className="input">
                  <select onChange={(e)=>setOptShop(e.target.value)}>
                    <option value="-1">Choose..</option>
                    {
                      datShop.map((e,i)=>
                        <option key={i} value={[e.id, e.name]}>{e.name}</option>
                      )
                    }
                  </select>
                </div>

                <div className="btn">
                  <button onClick={atClick} >{txtBtn}</button>
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