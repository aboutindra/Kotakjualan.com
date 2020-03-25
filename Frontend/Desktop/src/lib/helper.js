import axios from 'axios';

function createURL(param){

  //let IP = "116.202.171.211";

  let IP = "localhost";

  let port = "";

  let tipeNetwork = "http://";

  let version = "/api/v1";

  if(param === "akun"){
    
    port = ":1555";
    return `${tipeNetwork}${IP}${port}${version}`;

  }

  else{
    return "";
  }

}

export const get = async (url, param, t) => {  
  let baseURL = createURL(t);
  let temp = await axios({
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url:`${baseURL}${url}`,      
    params:{param:JSON.stringify(param)}
  });
  return temp.data;
}

export const post = async (url, param, t) => {
  let baseURL = createURL(t);
  let temp = await axios({
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
    },
    url:`${baseURL}${url}`,
    data:{parameter:param}
  });
  return temp.data;
}