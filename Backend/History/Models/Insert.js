
class Insert{
    constructor(DBCon) {
        this.db = DBCon;
        this.conter = this.db.collection('counters');
        this.dept = this.db.collection('ha');
          
        
        // console.log(DBCon);
 
    }

    async Get (){ 
      
     await this.conter.findOneAndUpdate({_id: 'studentid' }, {$inc:{sequence_value:1}});
     
      
    }
    async insertHistory(param){
      //  console.log(param);
      //   // console.log(this.db);
  
      
      for (let i = 0; i < 500; i++) {
       
       
      await this.Get();
      let getID = await this.conter.find().toArray();
      console.log(getID[0].sequence_value);

      
       let proses = await this.dept.insertOne(Object.assign({"id":getID[0].sequence_value},param),(err,ress)=>{
        err.send("berhasil");
       });
        return proses;
          
      } 
    
      }
    
}




module.exports = Insert; 