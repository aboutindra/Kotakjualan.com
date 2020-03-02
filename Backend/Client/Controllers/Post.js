const models = require('../Models/Index');
const DB = new models();

class Post{

    postDataClient(clientParam){
        return DB.insertDataClient(clientParam);
    }

}
module.exports = Post;