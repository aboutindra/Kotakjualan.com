
class Insert{
    constructor(DBCon) {
        this.db = DBCon;
        this.Logs = this.db.collection('Logs');
        this.col = this.db.collection('Transaksi');
          
        
        // console.log(DBCon);
 
    }

    async Get (){ 
     await this.conter.findOneAndUpdate({id:1}, {$inc:{idTransaksi:1}});
    }

    async insertTransaksi(param,ress){
      //  console.log(param);
      //   // console.log(this.db);
      
      let result; 

      await this.Get();
      let getID = await this.Logs.find().toArray();
      console.log(getID[0].idTransaksi);
      let id = getID[0].idTransaksi;
      
      
       let proses = await this.col.insertOne(Object.assign({"id":id},param));
       if(proses ? result = true : result = false);
        return result; 
    
       
    
      }
    
}




module.exports = Insert; 