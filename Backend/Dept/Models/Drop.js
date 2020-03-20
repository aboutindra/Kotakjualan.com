class Drop{

    constructor(DBCon){
        this.db = DBCon;
        this.members = this.db.collection('Members');
    }

    async dropDataMember(dataMember){
        let status;
        let generateDeleteParam = () => {
            return Object.assign({}, ...dataMember);
        };
        let statusDrop = await this.members.findOneAndDelete(generateDeleteParam());
        if(statusDrop ? status = true : status = false );
        return status;
    }

    async dropDataDept(idDept, deptCol){
        let status;
        let generateDeleteParam = () => {
            return Object.assign({}, ...idDept);
        };
        let statusDrop = await deptCol.findOneAndDelete(generateDeleteParam());
        if(statusDrop ? status = { status: true, message: "1 Dept data successfully deleted" } : status = { status: false, message: "1 Dept data failed deleted" });
        return status;
    }

    async dropDataPlant(plantParam, plantCol){
        let status;
        let generateDeleteParam = () => {
            return Object.assign({}, ...plantParam);
        };
        let statusDrop = await plantCol.findOneAndDelete(generateDeleteParam());
        if( statusDrop ? status = { status: true, message: "1 Plant data successfully deleted" } : status = { status: false, message: "1 Dept data failed deleted" } );
        return status;
    }

    async dropDataShop(shopParam, shopCol){
        let status;
        let generateDeleteParam = () => {
            return Object.assign({}, ...shopParam);
        };
        let statusDrop = await shopCol.findOneAndDelete(generateDeleteParam());
        if( statusDrop ? status = { status: true, message: "1 Shop data successfully deleted" } : status = { status: false, message: "1 Shop data failed deleted" } );
        return status;
    }

}
module.exports = Drop;