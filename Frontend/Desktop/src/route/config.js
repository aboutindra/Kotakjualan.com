import Member from '../page/Member';

import Login from '../page/Login';

import Signup from '../page/Signup';

export const configRoute = 
[
  {
    p:'/',
    c: Login
  },
  {
    p:'/r',
    c: Signup
  },
  {
    p:'/e/:u/member',
    c: Member
  }
]