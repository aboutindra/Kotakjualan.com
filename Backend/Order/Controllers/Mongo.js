const Model = require("..//Models/Index");
const model = new Model();

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

        temp = await model.get.getWithScope();

        break;

      case 4:

        let tempParam = param.f;

        temp = await model.get.getWithParam(tempParam);

        break;

      default:

        temp = [];

        break;

    }

  }

  async postOrder(param){

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
        
        res = await model.post.insertObject(param);

      } catch (error) {
        
        res = false;

      }

    }

    else{

      try {
        
        res = await model.post.insertWithArray(param);

      } catch (error) {
        
        res = false;

      }

    }

    return res;

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