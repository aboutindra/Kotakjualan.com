class Get{
    constructor(DBCon){
        this.db = DBCon;
        this.dept = this.db.collection('hi');
    }

   async findTransaksi(param){
    

    if (param.kunci !== undefined)  {
        let params = JSON.parse(param.kunci);
        console.log(params)
    
        return await this.dept.find(params).toArray();

       }else{
           
  return await this.dept.find().toArray();
    }

  
}
}
module.exports = Get;