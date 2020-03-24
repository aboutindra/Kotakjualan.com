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

}
module.exports = Drop;