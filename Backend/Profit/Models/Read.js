class Read{

    constructor(DBCon) {
        this.db = DBCon;
        this.profit = this.db.collection('Profit');
    }

    async getAllProfit(){
        let hasil = await this.profit.find().toArray();
        return hasil;
    }


}
module.exports = Read;