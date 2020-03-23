class Drop{

    constructor(DBCon){
        this.db = DBCon;
        this.toko = this.db.collection('Toko');
    }

    async dropDataToko(param){
        let hasil;
        let generateParam = () => {
            return Object.assign({}, ...param );
        };
        let update = await this.toko.findOneAndDelete(generateParam());
        if( update ? hasil = true : hasil = false )
        return hasil;
    }

}
module.exports = Drop;