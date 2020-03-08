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

    postDataShop(shopParam){
        return Control.postDataShop(shopParam);
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

    deleteDataShop(shopParam){
        return Control.deleteDataShop(shopParam);
    }

    updateDataDept(deptParam){
        return Control.updateDataDept(deptParam)
    }

    updateDataPlant(plantParam){
        return Control.updateDataPlant(plantParam)
    }

    updateDataShop(shopParam){
        return Control.updateDataShop(shopParam);
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