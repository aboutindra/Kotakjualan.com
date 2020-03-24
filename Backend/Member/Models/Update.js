class Update{

    constructor(DBCon) {
        this.db = DBCon;
        this.members = this.db.collection('Members');
        this.logs = this.db.collection('Logs');
    }

    async updateDataMember(memberParam){

        let statusUpdate;
        let generateUpdateParam = () => {
            return Object.assign({}, ...memberParam);
        };
        console.log(generateUpdateParam());
        generateUpdateParam();
        let statusUpdateData = await this.members.findOneAndUpdate(memberParam[0], { $set : generateUpdateParam() });
        if(statusUpdateData ? statusUpdate = true : statusUpdate = false );

        return statusUpdate;

    }

}
module.exports = Update;