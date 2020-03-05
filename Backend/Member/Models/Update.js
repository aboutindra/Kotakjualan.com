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

}
module.exports = Update;