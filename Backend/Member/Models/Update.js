class Update{

    async updateDataMember(memberParam, membersCol){

        let statusUpdate;
        let generateUpdateParam = () => {
            return Object.assign({}, ...memberParam);
        };
        console.log(generateUpdateParam());
        generateUpdateParam();
        let statusUpdateData = await membersCol.findOneAndUpdate(memberParam[0], { $set : generateUpdateParam() });
        if(statusUpdateData ? statusUpdate = { status: true, message: "1 Member data successfully updated"} : statusUpdate = { status: false, message: "1 Member data failed to updated" });

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

}
module.exports = Update;