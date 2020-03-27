const Model = require('../Models/Index');
const mdl = new Model();

class Mongo{

  async cekAccount(param){

    if(param.u != undefined || param.u != ""){

      let akun = await mdl.get.getAccount({u:param.u});

      if(akun.length != 0){
        if(akun[0].p === param.p){
          return akun[0].u;
        }
        else{
          return false;
        }
      }
    
      else{
        return false;
      }

    }

    else{
      return false;
    }


  }

  async get(param){

    if(param.t == 1){
      return await this.cekAccount(param.f);
    }

    else if(param.t == 2){
      return await mdl.get.getCount();
    }

    else{
      return false;
    }

  }

  async post(param){

    console.log(param);

    let arr = await mdl.get.getAccount({u:param.u});

    console.log(arr);

    if(arr.length === 0){
      return await mdl.post.postOne(param);
    }
    else{
      return false;
    }


  }

  async put(param){
    return await mdl.put.putOne(param);
  }

  async del(param){
    return await mdl.del.delOne(param);
  }

}

module.exports = Mongo;