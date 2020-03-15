const async = require('async');

const Model = require('../Models/Index');
const model = new Model();

const ModelLogs = require("../../Logs/Models/Index");
const modelLogs = new ModelLogs();

const FormatDate = require('./FormatDate');;
const frmt = new FormatDate();

class Mongo{

  async getSupp(param){    
    let tipe = param.t;    
    let temp = [];
    
    if(tipe === 1){
      temp = await model.get.getAllSupp();      
    }
    
    else if(tipe === 2){
      temp = await model.get.getWithParamSupp(param.f);
    }
    
    else if(tipe === 3){
      let lim = param.l;
      temp = await model.get.getWithLimitSupp(lim);
    }
    
    else if(tipe === 4){
      let str = param.s;
      let len = parama.l;
      temp = await model.get.getWithRangeSupp(str, len);
    }
    
    else if(tipe === 5){
      try {
        temp = await model.get.getLastId();            
      } catch (error) {
        temp = "Data Masih Kosong";
      }
    }
    
    else if(tipe === 6){
      temp = await model.get.getCount();            
    }
    
    else if(tipe === 7){
      temp  = await model.get.getAllItem();
    }

    else if(tipe === 8){
      temp  = await model.get.getItemWithParam(param);
    }
    
    else{
      return false; 
    }

    return temp;
  }  

  async postSupp(param){    

    let sta = false;
    let len = 0;
    let temp = true;        

    try {
      len = param.length;      
      if(len === undefined){
        sta = false;
      }
      else{
        sta = true;
      }
    } 
    
    catch (error) {sta = false;}            

    let countData = await model.get.getCount();    

    if(countData === 0){
      
      if(sta === false){
        
        let resId = 0;       
  
        param.id = resId + 1;

        param.sta = true;        

        param.tglInput = frmt.getFormat();        
  
        async.parallel({
          
          t1: async () => {
            
            temp = await model.post.insertOneSupp(param);      
  
          },
  
          t2: async () => {

            await modelLogs.put.updateOneLogs({idSupp : resId + 1});            
  
          }
  
        });
  
      }
  
      else{
  
        let resId = 0;  
  
        let tempId = resId + 1;
  
        let i = 0;
  
        while(i<len){
  
          param[i].id = tempId;
          tempId++;

          param[i].sta = true;        

          param[i].tglInput = frmt.getFormat();
  
          i++;
        }
  
        async.parallel({
          
          t1: async () => {
            
            temp = await model.post.insertManySupp(param);
  
          },
  
          t2: async () => {
  
            await modelLogs.put.updateOneLogs({idSupp : tempId-1});
  
          }
  
        });
        
      }

    }

    else{     
  
      if(sta === false){
        
        let resId = 0;
  
        try {
          
          let res = await modelLogs.get.getAll();
  
          resId = res[0].idSupp;          

          if(resId === undefined){

            let res = await model.get.getLastId();
  
            resId = res;

          }
  
        } 
        
        catch (error) {
                    
          console.log("Have problem with GetLastID");  

        }        
  
        param.id = resId + 1;

        param.sta = true;        

        param.tglInput = frmt.getFormat();        
  
        async.parallel({
          
          t1: async () => {
            
            temp = await model.post.insertOneSupp(param);      
  
          },
  
          t2: async () => {
  
            await modelLogs.put.updateOneLogs({idSupp : resId + 1});
  
          }
  
        });
  
      }
  
      else{
  
        let resId = 0;
  
        try {
          
          let res = await modelLogs.get.getAll();
  
          resId = res[0].idSupp;          

          if(resId === undefined){

            let res = await model.get.getLastId();
  
            resId = res;

          }
  
        } 
        
        catch (error) {
                    
          console.log("Have problem with GetLastID");  

        }       
  
        let tempId = resId + 1;
  
        let i = 0;
  
        while(i<len){
  
          param[i].id = tempId;
          tempId++;

          param[i].sta = true;        

          param[i].tglInput = frmt.getFormat();
  
          i++;
        }
  
        async.parallel({
          
          t1: async () => {
            
            temp = await model.post.insertManySupp(param);
  
          },
  
          t2: async () => {
  
            await modelLogs.put.updateOneLogs({idSupp : tempId-1});
  
          }
  
        });
        
      }
  
      
    }
    
    if(temp){
      return {sta:"OK", mess:"Proses insert berhasil :)"}
    }
    else{
      return {sta:"NO", mess:"Proses insert gagal :("}
    }

  }

  async putSupp(param){
        
    let temp = await model.put.updateOneSupp(param);        

    if(temp){
      return {sta:"OK", mess:"Proses update berhasil :)"}
    }
    else{
      return {sta:"NO", mess:"Proses update gagal :("}
    }

  }

  async delSupp(param){
    
    let temp = true;
    
    temp = await model.del.deleteOneSupp(param);    

    if(temp){
      return {sta:"OK", mess:"Proses delete berhasil :)"}
    }
    else{
      return {sta:"NO", mess:"Proses delete gagal :("}
    }
  }

}

module.exports = Mongo;