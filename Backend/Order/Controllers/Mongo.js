const async = require('async');

const Model = require("..//Models/Index");
const model = new Model();

const ModelLogs = require("../../Logs/Models/Index");
const modelLogs = new ModelLogs();

const FormatDate = require('./FormatDate');
const frmt = new FormatDate();

class Mongo{

  async getOrder(param){
    
    let tipe = param.t;

    let temp = [];

    switch(tipe){
      
      case 1 :

        temp = await model.get.getAll();        
 
        break;

      case 2 :

        let tempLimit = param.l;

        temp = await model.get.getWithLimit(tempLimit);

        break;

      case 3 : 

        let tempParam = {s:param.s, e:param.e}

        temp = await model.get.getWithScope(tempParam);

        break;

      case 4:

        let tempParam2 = param.f;

        temp = await model.get.getWithParam(tempParam2);

        break;

      default:

        temp = [];

        break;

    }
    
    return temp;

  }

  detectArray(param){

    let len = param.length;

    if(len === undefined){
      return false;
    }

    return true;

  }

  async postOrder(param){

    let sta = true;

    let len2 = 0;

    let len = 0;

    let resId = 0;

    let logs;

    let res = true;

    len = param.length;

    sta = this.detectArray(param);    

    len2 = await model.get.getCount();

    
    if(len2 === 0){

      if(sta === false){
        
        param.id = resId + 1;
  
        param.sta = false;
  
        param.tglInput = frmt.getFormat();
        
  
        try {
          
          (async ()=>{
            
            return async.parallel({
      
              t1: (callback) => {
                
                ( async ()=>{
    
                  let tempRes = await model.post.insertObject(param);                  
      
                  callback(null, tempRes);
    
                })();
    
      
              },  
      
              t2: async () => {
      
                await modelLogs.put.updateOneLogs({idOrder: resId + 1});
      
              }
      
            });                
  
          })();

        } catch (error) {
          
          res = false;

        }


      }

      else{

        let tempId = resId + 1;

        let i = 0;

        while(i<len){

          param[i].id = tempId;
          tempId++;

          param[i].sta = false;        

          param[i].tglInput = frmt.getFormat();

          i++;
        }

        async.parallel({
          
          t1: async () => {
            
            res = await model.post.insertWithArray(param);
  
          },
  
          t2: async () => {
  
            await modelLogs.put.updateOneLogs({idOrder : tempId-1});
  
          }
  
        });        

      }


    }

    else{

      logs = await modelLogs.get.getAll();

      if(logs.idOrder === undefined){
        resId = await model.get.getLastId();
      }
      else{
        resId = logs.idOrder;
      }      


      if(!sta){

        param.id = resId + 1;

        param.sta = false;        

        param.tglInput = frmt.getFormat();        
  
        async.parallel({
          
          t1: async () => {
            
            res = await model.post.insertObject(param);      
  
          },
  
          t2: async () => {
  
            await modelLogs.put.updateOneLogs({idOrder : resId + 1});
  
          }
  
        });

      }

      else{

        let tempId = resId + 1;

        console.log(tempId);
  
        let i = 0;        
  
        while(i<len){

          console.log(param[i]);

          console.log(tempId);
  
          param[i].id = tempId;
          tempId++;

          param[i].sta = false;        

          param[i].tglInput = frmt.getFormat();
  
          i++;
        }
  
        async.parallel({
          
          t1: async () => {
            
            res = await model.post.insertWithArray(param);
  
          },
  
          t2: async () => {
  
            await modelLogs.put.updateOneLogs({idOrder : tempId-1});
  
          }
  
        });

      }

    }
    
    if(res){
      return {sta:"OK", mess:"Proses insert berhasil :)"}
    }
    else{
      return {sta:"NO", mess:"Proses insert gagal :("}
    }

  }

  async putOrder(param){

    let res = true;

    let f = param.f;

    let s = param.s;

    try {
      
      res = await model.put.putOne(f, s);

    } catch (error) {
      
      res = false;

    }

    return res;

  }

  async delOrder(param){

    let res = true;

    try {
      
      res = await model.del.delOne(param);

    } catch (error) {
      
      res = false;

    }

    return res;

  }

}

module.exports = Mongo;