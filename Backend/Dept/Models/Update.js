class Update{

    constructor(DBCon) {
        this.db = DBCon;
        this.members = this.db.collection('Members');
        this.shop = this.db.collection('Shop');
        this.dept = this.db.collection('Dept');
        this.plant = this.db.collection('Plant');
        this.logs = this.db.collection('Logs');
    }

    async updateDataDept(deptParam){

        let statusUpdate;
        let generateUpdateParam = () => {
            return Object.assign({}, ...deptParam);
        };
        console.log(generateUpdateParam());
        generateUpdateParam();
        let statusUpdateData = await this.dept.findOneAndUpdate(deptParam[0], { $set : generateUpdateParam() });
        if(statusUpdateData ? statusUpdate = true : statusUpdate = false);

        return statusUpdate;

    }

    async updateDataPlant(plantParam){

        let statusUpdate;
        let generateUpdateParam = () => {
            return Object.assign({}, ...plantParam);
        };
        console.log(generateUpdateParam());
        let statusUpdateData = await this.plant.findOneAndUpdate(plantParam[0], { $set : generateUpdateParam() });
        if(statusUpdateData ? statusUpdate = true: statusUpdate = false );

        return statusUpdate;

    }

    async updateDataShop(shopParam){

        let statusUpdate;
        let generateUpdateParam = () => {
            return Object.assign({}, ...shopParam);
        };
        console.log(generateUpdateParam());
        let statusUpdateData = await this.shop.findOneAndUpdate(shopParam[0], { $set : generateUpdateParam() });
        if(statusUpdateData ? statusUpdate = true : statusUpdate = false);

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
        } else if ( typeUpdate === "Dept" ){
            let hasil;
            let getDataLogs = await this.logs.find().toArray();
            let dataEdit = await this.logs.findOneAndUpdate({"_id" : getDataLogs[0]._id}, {$set:{ "idDept" : getDataLogs[0].idCard + 1}});
            if( dataEdit ? hasil = true : hasil = false  );
            return hasil;
        } else if ( typeUpdate === "Plant" ){
            let hasil;
            let getDataLogs = await this.logs.find().toArray();
            let dataEdit = await this.logs.findOneAndUpdate({"_id" : getDataLogs[0]._id}, {$set:{ "idPlant" : getDataLogs[0].idCard + 1}});
            if( dataEdit ? hasil = true : hasil = false  );
            return hasil;
        } else if( typeUpdate === "Shop" ){
            let hasil;
            let getDataLogs = await this.logs.find().toArray();
            let dataEdit = await this.logs.findOneAndUpdate({"_id" : getDataLogs[0]._id}, { $set : { "idShop" : getDataLogs[0].idShop + 1 } });
            if( dataEdit ? hasil = true : hasil = false  );
            return hasil;
        }
    }

}
module.exports = Update;