const controllers = require('../Controllers/Index');
const Control = new controllers();

class Post{

    postDataMember(clientParam){
        return Control.postDataMember(clientParam);
    }

    postDataDept(deptParam){
        return Control.postDataDept(deptParam);
    }

    postDataPlant(plantParam){
        return Control.postDataPlant(plantParam);
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

    deleteDataPlant(plantParam){
        return Control.deleteDataPlant(plantParam);
    }

    updateDataDept(deptParam){
        return Control.updateDataDept(deptParam)
    }

    updateDataPlant(plantParam){
        return Control.updateDataPlant(plantParam)
    }

    deleteDataDept(deptParam){
        return Control.deleteDataDept(deptParam)
    }

    searchDataMember(searchParam){
        return Control.searchDataMember(searchParam);
    }

    searchDataPlant(searchParam){
        return Control.searchDataPlant(searchParam);
    }

    searchDataShop(searchParam){
        return Control.searchDataShop(searchParam);
    }

}
module.exports = Post;