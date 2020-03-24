const Model = require('../Models/Index');
const mdl = new Model();

class Mongo{

  cekAccount(param){

    if(param.u != undefined || param.u != ""){

      let akun = mdl.get.getAccount(param.u);
  
      if(akun[0].pass === param.p){
        return akun[0].user;
      }

    }

    else{
      return false;
    }


  }

  get(param){

    if(param.t == 1){
      return this.cekAccount(param.f);
    }

    else if(param.t == 2){
      return mdl.get.getCount();
    }

    else{
      return false;
    }

  }

  post(param){

    let arr = mdl.get.getAccount(param.u);

    if(arr.length === 0){
      return mdl.post.postOne(param);
    }
    else{
      return false;
    }


  }

  put(param){
    return mdl.put.putOne(param);
  }

  del(param){
    return mdl.del.delOne(param);
  }

}

module.exports = Mongo;