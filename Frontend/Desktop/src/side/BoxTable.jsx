import React, { useState, useEffect } from 'react';

import Loader from '../component/Loader';

import { FiEdit, FiX, FiSearch } from 'react-icons/fi';

import ReactPaginate from 'react-paginate';

import { getAll } from '../lib/api';

import { buildIO } from '../lib/io';

export default function BoxTable(){

  const stan = 10;

  const [d, setD] = useState([]);  
  
  const [datCari, setDatCari] = useState([]);

  const [tempD, setTempD] = useState([]);

  const [sta, setSta] = useState(false);

  const [optFilter, ] = useState([{val:-1, txt:"Choose.."},{val: 0,txt: "NIK"},{val: 1,txt: "Nama"},{val: 2,txt: "NoKop"}]);

  const [txtCari, setTxtCari] = useState("");

  const [opt, setOpt] = useState(-1);

  const [countPage, setCountPage] = useState(0);

  const [awal, ] = useState(0);

  const [akhir, ] = useState(stan-1);

  const [page, setPage] = useState(0);
  
  const [staPaginate, setStaPaginate] = useState(true);

  const io = buildIO();
  
  const reload = () => {
    
    let temp = d;
    
    let tempData = [];
    
    let count = awal;                        
    
    let len = temp.length / stan;

    setCountPage(len);
    
    temp.forEach((e, i)=>{
      if(i >= awal){
        if(count <= akhir){          
          tempData.push(e);
          count++;         
        }
      }
    });    
    
    setStaPaginate(true);
    
    setDatCari(temp);

    setTempD(tempData);   
    
  }

  const reloadRealTime = (param) => {
    
    let temp = param;
    
    let tempData = [];
    
    let count = awal;                        
    
    let len = temp.length / stan;

    setCountPage(len);
    
    temp.forEach((e, i)=>{
      if(i >= awal){
        if(count <= akhir){          
          tempData.push(e);
          count++;         
        }
      }
    });    
    
    setStaPaginate(true);
    
    setDatCari(temp);

    setTempD(tempData);   

    console.log("Hello");
    
  }

  useEffect(()=>{
    
    io.on("packageAllMember", res => {      

      reloadRealTime(res);

    });

  },[]);
  
  const getData = async () => {
    
    let temp = [];

    let tempData = [];

    let count = awal;
    
    temp = await getAll();    

    if(temp.length >= stan){
      let len = temp.length/stan;
  
      setCountPage(len);    
  
      setD(temp);    
  
      temp.forEach((e, i)=>{
        if(i >= awal){
          if(count <= akhir){          
            tempData.push(e);
            count++;         
          }
        }
      });
      
      setTempD(tempData);

      setDatCari(temp);      

    }

    else{
      setTempD(temp);
      setDatCari(temp);      
    }  

    setStaPaginate(true);
    
    setSta(true);

  }  

  const eventPaginate = () => {

    let nowPage = page;    

    let temp = datCari;    

    let tempData = [];

    let count = awal + (nowPage * stan);

    let end = akhir + (nowPage * stan);

    temp.forEach((e,i)=>{
      if(i >= count){
        if(count <= end){
          tempData.push(e);
          count++;
        }
      }
    });    

    setTempD(tempData);

  }

  const atPaginate = d => {    

    setPage(d.selected);

  }

  useEffect(()=>{

    eventPaginate();

  },[page]);

  const autoPaginate = param => {

    let temp = param;    
    
    let tempData = [];

    let count = awal;     
    
    let len = temp.length / stan;

    setCountPage(len);

    setDatCari(temp);

    temp.forEach((e, i)=>{
      if(i >= awal){
        if(count <= akhir){          
          tempData.push(e);
          count++;         
        }
      }
    });    

    setStaPaginate(true);    

    setTempD(tempData);

  }

  const cariMember = (idx, param) => {
    
    let tempData= d;        
    
    let tempCari = []; 
    
    if(idx === "0"){
      tempData.forEach((e)=>{
        let convertString = e.nik.toString();
        if( convertString.search(param) >= 0 ){
          tempCari.push(e);        
        }      
      });    
    }

    else if(idx === "1"){      
      tempData.forEach((e)=>{        
        let tempNama = e.nama.toUpperCase();
        if(tempNama.search(param) >= 0 ){          
          tempCari.push(e);                  
        }      
      });    
    }
    
    else if(idx === "2"){
      tempData.forEach((e)=>{
        let convertString = e.noKop.toString();
        if( convertString.search(param) >= 0 ){
          tempCari.push(e);        
        }      
      });    
    }        

    if(tempCari.length <= stan){
      setTempD(tempCari);
      setStaPaginate(false);
    } 
    
    else{
      autoPaginate(tempCari);
      setStaPaginate(true);
    }    

  }

  const atSearch = () => {              

    if(txtCari === ""){      
      reload();      
    }
    else if(opt < 0){      
      reload();
      alert("Pilih tipe pencarian terlebih dahulu");
    }
    else{
      cariMember(opt, txtCari.toUpperCase());            
    }    

  }

  const atEnter = (e) => {
    if(e.key === "Enter"){
      atSearch();
    }
  }

  useEffect(()=>{

    getData();

  },[]);  
  
  if(sta === false){
    return(
      <Loader></Loader>
    )
  }

  else{

    return(
      
      <div className="parent">      

      <div className="boxTable">

        <div className="wrap">

        <div className="row1">
          
          <div className="col">                    
            <div className="input">                      
              <select onChange={(e)=>{setOpt(e.target.value)}} >
                {
                  optFilter.map((e,i)=>
                    <option value={e.val} key={i} >{e.txt}</option>
                  )
                }                
              </select>
            </div>
          </div>

          <div className="col">                    
            <div className="input">
              <input type="text" onKeyDown={atEnter} onChange={(e)=>setTxtCari(e.target.value)} />
            </div>
          </div>

          <div className="col">                    
            <div className="btn">
              <button onClick={atSearch} ><FiSearch/></button>
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
          
          {  
          
            tempD.map((e,i)=>
    
              <div className="item" key={i}>
              
                <div className="nokop">
                  <span>{e.noKop}</span>
                </div>
                
                <div className="nik">
                  <span>{e.nik}</span>
                </div>  
                
                <div className="idcard">
                  <span>{e.idCard}</span>
                </div>
                
                <div className="nama">
                  <span>{e.nama}</span>
                </div>
                
                <div className="sta">
                  <button><FiEdit></FiEdit></button>
                  <button><FiX></FiX></button>
                </div>                    
      
              </div>

            )  

          }          

          </div>

          <div className="row3">

            {
              
              (!staPaginate) ? null :
              
              <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={countPage}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                onPageChange={atPaginate}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />

            }


          </div>


        </div>            

        
      </div>                                         

      </div>

    )

  }

  
}