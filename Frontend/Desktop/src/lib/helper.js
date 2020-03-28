import axios from 'axios';

function createURL(){

  let IP = "116.202.171.211";

  // let IP = "localhost";

  let tipeNetwork = "http://";

  let version = "/api/v1";

  return `${tipeNetwork}${IP}${version}`;

}

export const get = async (url, param) => {  
  let baseURL = createURL();
  let temp = await axios({
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url:`${baseURL}${url}`,      
    params:param
  });
  return temp.data;
}

export const post = async (url, param) => {
  let baseURL = createURL();
  let temp = await axios({
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
    },
    url:`${baseURL}${url}`,
    data:param
  });
  return temp.data;
}