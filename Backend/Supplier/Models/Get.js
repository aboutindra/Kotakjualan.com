class Get{

  constructor(connectionDB){
    
    this.con = connectionDB;
    
    this.supp = this.con.collection("Supplier");     

  }    

  async getAllSupp(){                

    let res = await this.supp.find().toArray();

    return res;

  }

  //param = {Object}
  async getWithParamSupp(param){
    let temp = await this.supp.find(param).toArray();
    return temp;
  }

  //lim = Integer
  async getWithLimitSupp(lim){
    let temp = await this.supp.find().limit(lim).toArray();
    return temp;
  }

  //range = {start, len} => {Mulainya mau darimana, Banyak data yang mau di ambil}
  async getWithRangeSupp(start, len){      
    let temp = await this.supp.find().skip(start).limit(len).toArray();
    return temp;
  }  

  async getLastId(){
    let temp = await this.supp.find().toArray();    
    let len = temp.length;
    let tempLastId =  temp[len-1].id;
    return tempLastId;    
  }

  async getCount() {
    let temp =  await this.supp.countDocuments();    
    return temp;
  }    

  async getAllItem(){
    
    let tempData = await this.supp.find().toArray();
    
    let res = [];

    let tempItem = [];

    let tempRes = [];

    tempData.forEach(e => {

      tempRes = res;

      tempItem = e.item;

      res = tempRes.concat(tempItem);

    });

    return res;

  }

  async getItemWithParam(param){

    let tempData = await this.supp.findOne(param).toArray();
    
    let res = tempData[0].item;

    return res;

  }

}

module.exports = Get;