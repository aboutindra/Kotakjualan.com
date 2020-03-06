const models = require('../Models/Index');
const DB = new models();

class Post{

    postDataMember(clientParam){
        return DB.insertDataMember(clientParam);
    }

    postDataDept(deptParam){
        return DB.insertDataDept(deptParam);
    }

    updateDataMember(clientParam){
        return DB.updateDataMember(clientParam);
    }

    deleteDataMember(id_param){
        return DB.deleteDataMember(id_param);
    }

    searchDataMember(id_param){
        return DB.readDataMember(id_param);
    }

}
module.exports = Post;