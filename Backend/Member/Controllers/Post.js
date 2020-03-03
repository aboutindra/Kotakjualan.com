const models = require('../Models/Index');
const DB = new models();

class Post{

    postDataMember(clientParam){
        return DB.insertDataMember(clientParam);
    }

    updateDataMember(clientParam){
        return DB.updateDataMember(clientParam);
    }

    deleteDataMember(id_param){
        return DB.deleteDataMember(id_param);
    }

}
module.exports = Post;