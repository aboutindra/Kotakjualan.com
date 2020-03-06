class Drop{

    async dropDataMember(id_member, membersCol){
        let status = {status: false, message: "1 Member data failed updated"};
        let generateDeleteParam = () => {
            return Object.assign({}, ...id_member);
        };
        let statusDrop = await membersCol.findOneAndDelete(generateDeleteParam());
        if(statusDrop ? status = { status: true, message: "1 Member data successfully updated" } : status = { status: false, message: "1 Member data failed updated" });
        return status;
    }

    async dropDataDept(idDept, deptCol){
        let status;
        let generateDeleteParam = () => {
            return Object.assign({}, ...idDept);
        };
        let statusDrop = await deptCol.findOneAndDelete(generateDeleteParam());
        if(statusDrop ? status = { status: true, message: "1 Dept data successfully updated" } : status = { status: false, message: "1 Dept data failed updated" });
        return status;
    }
}
module.exports = Drop;