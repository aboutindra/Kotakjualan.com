class Update{
        constructor(DBcon){
            this.db = DBcon
            this.col = this.db.collection('hi');
            this.db = DBcon;
            this.col = this.db.collection('hasil');
        }

        async updateMasukan(param){
        console.log(param);
        console.log(param.id);
        let id = JSON.parse(param.id);
        console.log(param.data);
        
        let paramss = JSON.parse(param.data);

        console.log(paramss);
        let statusUpdate =  await this.col.updateOne({"id":id }, {$set:paramss});
        
            return statusUpdate;
    
        }
    


}
module.exports = Update;