class Read{

    constructor(DBCon) {
        this.db = DBCon;
        this.toko = this.db.collection('Toko');
        this.db = DBCon;
    }

    async getAllToko(){
        return await this.toko.find().toArray();
    }

    async getSpecificToko(param){
        let generateParam = () => {return Object.assign({}, ...param )};
        return await this.toko.find(generateParam()).toArray();
    }

}
module.exports = Read;