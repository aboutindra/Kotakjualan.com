import axios from 'axios';

const baseURL = "http://116.202.171.211/api/v1";

export const get = async (url) => {
  let temp = await axios({
    method:'GET',
    url:`${baseURL}${url}`,      
  });
  return temp.data;
}

export const post = async (url, param) => {
  let temp = await axios({
    method:"POST",
    url:`${baseURL}${url}`,
    data:{param}
  });
  return temp.data;
}