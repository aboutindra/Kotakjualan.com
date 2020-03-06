const controllers = require('../Controllers/Index');
const Control = new controllers();

class Post{

    postDataMember(clientParam){
        return Control.postDataMember(clientParam);
    }

    postDataDept(deptParam){
        return Control.postDataDept(deptParam);
    }

    postFindDataDept(deptParam){
        return Control.postFindDataDept(deptParam);
    }

    updateDataMember(clientParam){
        return Control.updateDataMember(clientParam);
    }

    deleteDataMember(id_member){
        return Control.deleteDataMember(id_member);
    }

    updateDataDept(deptParam){
        return Control.updateDataDept(deptParam)
    }

    deleteDataDept(deptParam){
        return Control.deleteDataDept(deptParam)
    }

    searchDataMember(searchParam){
        return Control.searchDataMember(searchParam);
    }

}
module.exports = Post;