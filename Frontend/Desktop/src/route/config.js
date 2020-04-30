import Login from '../page/Login';

import Signup from '../page/Signup';

import Supplier from '../page/Supplier';

export const configRoute = 
[
  {
    p:'/',
    c: Login
  },
  {
    p:'/r',
    c: Signup
  },{
    p:'/k/:toko',
    c: Supplier
  }
]