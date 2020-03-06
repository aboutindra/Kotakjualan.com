const controllers = require('../Controllers/Index');
const Control = new controllers();

class Post{

    postDataMember(clientParam){
        return Control.postDataMember(clientParam);
    }

    postDataDept(deptParam){
        return Control.postDataDept(deptParam);
    }

    updateDataMember(clientParam){
        return Control.updateDataMember(clientParam);
    }

    deleteDataMember(id_member){
        return Control.deleteDataMember(id_member);
    }

    searchDataMember(searchParam){
        return Control.searchDataMember(searchParam);
    }

}
module.exports = Post;