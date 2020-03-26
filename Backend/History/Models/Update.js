class Update{
        constructor(DBcon){
            this.db = DBcon
            this.col = this.db.collection('hasil');
        }

        async updateMasukan(param){

            let statusUpdateData = await this.col.updateOne(param.id, { $set : param.data });
            if(statusUpdateData ? statusUpdate = true : statusUpdate = false );
    
            return statusUpdate;
    
        }
    


}
module.exports = Update