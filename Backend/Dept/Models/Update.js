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

    async updateDataDept(deptParam, deptCol){

        let statusUpdate;
        let generateUpdateParam = () => {
            return Object.assign({}, ...deptParam);
        };
        console.log(generateUpdateParam());
        generateUpdateParam();
        let statusUpdateData = await deptCol.findOneAndUpdate(deptParam[0], { $set : generateUpdateParam() });
        if(statusUpdateData ? statusUpdate = { status: true, message: "1 Dept data successfully updated"} : statusUpdate = { status: false, message: "1 Dept data failed to updated" });

        return statusUpdate;

    }

    async updateDataPlant(plantParam, plantCol){

        let statusUpdate;
        let generateUpdateParam = () => {
            return Object.assign({}, ...plantParam);
        };
        console.log(generateUpdateParam());
        let statusUpdateData = await plantCol.findOneAndUpdate(plantParam[0], { $set : generateUpdateParam() });
        if(statusUpdateData ? statusUpdate = { status: true, message: "1 Plant data successfully updated" } : statusUpdate = { status: false, message: "1 Plant data failed to updated" });

        return statusUpdate;

    }

    async updateDataShop(shopParam, shopCol){

        let statusUpdate;
        let generateUpdateParam = () => {
            return Object.assign({}, ...shopParam);
        };
        console.log(generateUpdateParam());
        let statusUpdateData = await shopCol.findOneAndUpdate(shopParam[0], { $set : generateUpdateParam() });
        if(statusUpdateData ? statusUpdate = { status: true, message: "1 Shop data successfully updated" } : statusUpdate = { status: false, message: "1 Shop data failed to updated" });

        return statusUpdate;

    }

    async updateDataLogs(typeUpdate){
        if( typeUpdate === "Members" ){
            let hasil;
            let getDataLogs = await this.logs.find().toArray();
            let dataEdit = await this.logs.findOneAndUpdate({"_id" : getDataLogs[0]._id}, {$set:{ "idCard" : getDataLogs[0].idCard + 1, "noKop" : getDataLogs[0].noKop + 1 }});
            if( dataEdit ? hasil = true : hasil = false  );
            console.log(hasil);
            return hasil;
        }
    }

}
module.exports = Update;