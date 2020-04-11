class Update{
        constructor(DBcon){
            this.db = DBcon
            this.col = this.db.collection('Transaksi');
        }
        
        async updateTransaksi(param){
        console.log(param);
        console.log(param.id);
        let id = JSON.parse(param.id);
        console.log(param.data);
        
        let paramss = JSON.parse(param.data);

        let result ; 

        console.log(paramss);
        let statusUpdate =  await this.col.updateOne({"id":id }, {$set:paramss});
        
        if(statusUpdate ? result = true : result = false);
        return result; 
    
        }
    


}
module.exports = Update;