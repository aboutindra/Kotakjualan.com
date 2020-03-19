const async = require('async');
const Model = require('../Models/Index');
const model = new Model();

class DatabaseController{
    async getDept(param){
        let hasil = [];
        if( param.id === 1 ){
            hasil = await model.read.readAll();
        } else if( param.id === 2 ) {
            hasil = await model.read.readDataDeptWithParam( param.keyword );
        } else {
            hasil = false;
        }
        return hasil;
    }

    async postMember(param){
        if( param.id === 1 ){
            let insertMembers =  model.insert.insertDataMember(param.data);
            let updateLogsMembers =  model.update.updateDataLogs("Members");
            let result = { status : [ {insertMembers : await insertMembers}, {updateLogsMembers : await updateLogsMembers}] };
            return result;
        }
    }

    async updateMember(param){
        if( param.id === 1 ){
            let updateMembers = model.update.updateDataMember(param.data);
            return { updateMembers : await updateMembers }
        }
    }

    async deleteMember(param){
        if( param.id === 1 ){
            let deleteMembers = model.drop.dropDataMember(param.data);
            return { deleteMembers : await deleteMembers }
        }
    }
}
module.exports = DatabaseController;