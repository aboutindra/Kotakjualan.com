import { apiLogin, apiSignup } from './api';

export async function checkAccount(user, pass){
  
  let format = {
    u: user,
    p: pass
  }

  let temp = await apiLogin(format);  

  return temp;

}

export async function newAccount(user, pass){

  let format = {
    u: user,
    p: pass
  }
  
  let res = await apiSignup(format);

  return res;

}