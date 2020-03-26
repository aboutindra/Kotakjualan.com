class Get{
    constructor(DBCon){
        this.db = DBCon;
        this.dept = this.db.collection('hi');
    }

   async findHistory(param){
    

    if (param.kunci !== undefined)  {
        let params = JSON.parse(param.kunci);
        console.log(params)
    
        await this.dept.find(params).toArray((req,res)=>{

            if (req) throw req;
            param.res.json(res);
          
        
        });

       }else{
           
    await this.dept.find().toArray((req,res)=>{

        if (req) throw req;
        param.res.json(res);
      });
    }

  }
}

module.exports = Get;