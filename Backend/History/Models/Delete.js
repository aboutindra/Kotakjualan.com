class Delete{
    constructor(DBCon){
        this.db = DBCon;
        this.col = this.db.collection('hasil');

    }

    async deleteOneHistory(id){
        console.log(this.db);
        
        let proses = await this.col.DeleteOne(id);
        return proses;
    }

    async deleteOneHistory(id){
        console.log(this.db);
        
        let proses = await this.col.DeleteMany(id);
        return proses;
    }


}

module.exports = Delete;