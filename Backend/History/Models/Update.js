class Update{
        constructor(DBcon){
            this.db = DBcon
            this.col = this.db.collection('hi');
        }

        async updateMasukan(param){
        console.log(param);
        console.log(param.id);
        let id = JSON.parse(param.id);
        console.log(param.data);
            
        let statusUpdate =  await this.col.updateOne({"id":id }, {$set:{"nama":param.data}});
        
            return statusUpdate;
    
        }
    


}
module.exports = Update;