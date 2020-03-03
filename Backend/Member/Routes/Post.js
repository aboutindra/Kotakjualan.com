const controllers = require('../Controllers/Index');
const Control = new controllers();

class Post{

    postDataClient(clientParam){
        return Control.postDataClient(clientParam);
    }

}
module.exports = Post;