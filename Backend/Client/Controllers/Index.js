const request = require('./Request');
const Request = new request();

const post = require('./Post');
const Post = new post();

class Controllers{

    reqAllClientData(){
        return Request.getAllClientData();
    }

    postDataClient(clientParam){
        return Post.postDataClient(clientParam);
    }

}

module.exports = Controllers;