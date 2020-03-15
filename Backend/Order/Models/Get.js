class Get{

  constructor(con){
  
    this.connection = con;

    this.order = this.connection.collection("Order");

  }

  async getAll(){
    let temp = await this.order.find().toArray();
    return temp;
  }

  async getWithLimit(limit){
    let tempLimit = limit;
    let temp = await this.order.find().limit(tempLimit).toArray();
    return temp;
  }

  async getWithScope(param){
    let start = param.s - 1;
    let end = param.e - param.s - 1;
    let temp = await this.order.find().skip(start).limit(end).toArray();
    return temp;
  }

  async getWithParam(param){
    let temp = await this.order.find(param).toArray();
    return temp;
  }

}

module.exports = Get;