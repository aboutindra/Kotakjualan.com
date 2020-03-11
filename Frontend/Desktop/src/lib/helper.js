import axios from 'axios';

// const baseURL = "http://116.202.171.211/api/v1";
const baseURL = "http://localhost:3001/api/v1";

export const get = async (url) => {  
  let temp = await axios({
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url:`${baseURL}${url}`,      
  });
  return temp.data;
}

export const post = async (url, param) => {
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