class Drop{

    constructor(DBCon){
        this.db = DBCon;
        this.dept = this.db.collection('Dept');
        this.plant = this.db.collection('Plant');
        this.shop = this.db.collection('Shop');
    }

    async dropDataDept(idDept){
        let status;
        let generateDeleteParam = () => {
            return Object.assign({}, ...idDept);
        };
        let statusDrop = await this.dept.findOneAndDelete(generateDeleteParam());
        if(statusDrop ? status = true : status = false );
        return status;
    }

    async dropDataPlant(plantParam){
        let status;
        let generateDeleteParam = () => {
            return Object.assign({}, ...plantParam);
        };
        let statusDrop = await this.plant.findOneAndDelete(generateDeleteParam());
        if( statusDrop ? status = true : status = false );
        return status;
    }

    async dropDataShop(shopParam){
        let status;
        let generateDeleteParam = () => {
            return Object.assign({}, ...shopParam);
        };
        let statusDrop = await this.shop.findOneAndDelete(generateDeleteParam());
        if( statusDrop ? status = ture : status = false );
        return status;
    }

}
module.exports = Drop;