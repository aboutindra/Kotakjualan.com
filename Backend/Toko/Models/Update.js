
class Update{

    constructor(DBCon) {
        this.db = DBCon;
        this.logs = this.db.collection('Logs');
        this.toko = this.db.collection('Toko');
    }

    async updateDataLogs(typeUpdate){
        let hasil;
        if(typeUpdate === "Logs"){
            let id = await this.logs.find().toArray();
            let update = this.logs.findOneAndUpdate(id[0]._id, { $set : { idToko : id[0].idToko + 1 } });
            if( update ? hasil = true : hasil = false );
            return hasil;
        }
    }

    async updateDataToko(param){
        let hasil;
        let generateParam = () => {
            return Object.assign({}, ...param );
        };
        let update = await this.toko.findOneAndUpdate({ id : generateParam().idToko }, { $set : generateParam()  });
        if( update ? hasil = true : hasil = false );
        return hasil;
    }

}
module.exports = Update;