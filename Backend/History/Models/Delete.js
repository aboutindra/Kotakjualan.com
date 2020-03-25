class Delete{
    constructor(DBCon){
        this.db = DBCon;
        this.col = this.db.collection('hi');

    }

    async deleteOneHistory(param){
        console.log(param);
        
        let proses = await this.db.collection('hi').deleteOne({"id":param});
        return proses;
    }



}

module.exports = Delete;