const Model = require("..//Models/Index");
const model = new Model();

class Mongo{

  getOrder(param){
    
    let tipe = param.t;

    let temp = [];

    switch(tipe){
      
      case 1 :

        temp =  model.get.getAll();        
 
        break;

      case 2 :

        let tempLimit = param.l;

        temp = model.get.getWithLimit(tempLimit);

        break;

      case 3 : 

        let tempParam = {s:param.s, e:param.e}

        temp = model.get.getWithScope();

        break;

      case 4:

        let tempParam = param.f;

        temp = model.get.getWithParam(tempParam);

        break;

    }

  }

  postOrder(param){

    let sta = true;

    let res;

    try {
      
      let len = param.length;

      if(len === undefined){
        sta = false;
      }

    } catch (error) {
      
      console.log("Some error in Insert on Order");

    }

    if(!sta){

      try {
        
        model.post.insertObject(param);

        res = true;

      } catch (error) {
        
        res = false;

      }

    }

    else{

      try {
        
        model.post.insertWithArray(param);

        res = true;

      } catch (error) {
        
        res = false;

      }

    }

    return res;

  }

  putOrder(param){

    let res = true;

    let f = param.f;

    let s = param.s;

    try {
      
      res = model.put.putOne(f, s);

    } catch (error) {
      
      res = false;

    }

    return res;

  }

  delOrder(param){

    let res = true;

    try {
      
      res = model.del.delOne(param);

    } catch (error) {
      
      res = false;

    }

    return res;

  }

}

module.exports = Mongo;