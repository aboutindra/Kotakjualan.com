const controllers = require('../Controllers/Index');
const Control = new controllers();

class Post{

    postDataMember(clientParam){
        return Control.postDataMember(clientParam);
    }

    updateDataMember(clientParam){
        return Control.updateDataMember(clientParam);
    }

    deleteDataMember(id_member){
        return Control.deleteDataMember(id_member);
    }

}
module.exports = Post;