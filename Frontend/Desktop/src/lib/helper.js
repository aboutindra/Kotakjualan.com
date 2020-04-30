import axios from 'axios';

function createURL(){

  let IP = "api.kotakjualan.com"

  // let IP = "111.221.44.108";

  // let IP = "localhost";

  let tipeNetwork = "https://";

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

export const put = async (url, param) => {
  let baseURL = createURL();
  let tmp = await axios({
    method:"PUT",
    headers: {
      'Content-Type' : 'application/json',      
    },
    url: `${baseURL}${url}`,
    data:param
  });
  return tmp.data; 
}

export const del = async (url, param) => {
  let baseURL = createURL();
  let tmp = await axios({
    method:"DELETE",
    headers: {
      'Content-Type' : 'application/json',      
    },
    url: `${baseURL}${url}`,
    data:param
  });
  return tmp.data; 
}