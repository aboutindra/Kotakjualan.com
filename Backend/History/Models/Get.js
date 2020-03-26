class Get{
    constructor(DBCon){
        this.db = DBCon;
        console.log(this.db);
        this.dept = this.db.collection('hi');
    }

   async findHistory(param){
    await this.dept.find().toArray((req,res)=>{

        if (req) throw req;
        console.log(param.res)
        param.res.json(res);
      });
   }
}

module.exports = Get;