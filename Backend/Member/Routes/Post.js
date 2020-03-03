const controllers = require('../Controllers/Index');
const Control = new controllers();

class Post{

    postDataMember(clientParam){
        return Control.postDataMember(clientParam);
    }

    updateDataMember(clientParam){
        return Control.updateDataMember(clientParam);
    }

}
module.exports = Post;