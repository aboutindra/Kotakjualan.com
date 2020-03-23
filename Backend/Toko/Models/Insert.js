
class Insert{

    constructor(DBCon) {
        this.db = DBCon;
        this.toko = this.db.collection('Toko');
        this.logs = this.db.collection('Logs');
    }

    async insertToko(param){
        let result;
        let id = await this.logs.find().toArray();
        let generateParam = () => {
            return Object.assign({}, ...param );
        };
        let dataWantToInsert = { idToko : id[0].idToko, generateParam };
        let hasil = this.toko.insertOne(dataWantToInsert);
        if(hasil ? result = true : result = false);
        return result;
    }

}
module.exports = Insert;