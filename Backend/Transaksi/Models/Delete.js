class Delete{
    constructor(DBCon){
        this.db = DBCon;
        this.col = this.db.collection('Transaksi');

    }

    async deleteTransaksi(param){
        console.log(param);
        
        let result;

        let proses = await this.col.deleteOne({"id":param});

        if(proses ? result = true : result = false);
        return result; 
    }



}

module.exports = Delete;