import * as LoginActions from './loginstateaction.action';
import { Action } from '@ngrx/store';
import { Logininfo } from './logininfo.model';


 const initlogin:Logininfo={display:false,username:''};
 const  LOGIN= "LOGIN";

export function reducer(state:Logininfo=initlogin,action:LoginActions.Actions)
{
    switch(action.type)
    {
        case LoginActions.LOGIN:
         return[state, action.payload]

         default:
         return state;
    }
       
}

