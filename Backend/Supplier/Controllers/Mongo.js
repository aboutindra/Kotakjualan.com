const Model = require('../Models/Index');
const model = new Model();

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
    else{
      return false;
    }
    return temp;
  }

  async postSupp(param){
    
    let sta = false;
    let len = 0;
    let temp;

    try {
      len = param.length;
      sta = true;
    } catch (error) {
      sta = false;
    }

    if(sta === false){
      temp = await model.post.insertOneSupp(param);      
    }
    else{
      temp = await model.post.insertManySupp(param);
    }

    if(temp){
      return {sta:"OK", mess:"Proses insert berhasil :)"}
    }
    else{
      return {sta:"NO", mess:"Proses insert gagal :("}
    }

  }

  async putSupp(param){
    let temp = await model.put.updateOneSupp(param.u);    
    if(temp){
      return {sta:"OK", mess:"Proses update berhasil :)"}
    }
    else{
      return {sta:"NO", mess:"Proses update gagal :("}
    }
  }

  async delSupp(param){
    let temp = await model.del.deleteOneSupp(param.d);
    if(temp){
      return {sta:"OK", mess:"Proses delete berhasil :)"}
    }
    else{
      return {sta:"NO", mess:"Proses delete gagal :("}
    }
  }

}

module.exports = Mongo;