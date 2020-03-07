import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { configRoute } from './config';

export default function Root(){
  return(
    <Switch>
      {
        configRoute.map((r,i)=>
        <Route key={i} exact path = {r.p}   component= {r.c} />
        )
      }
    </Switch>
  );
}