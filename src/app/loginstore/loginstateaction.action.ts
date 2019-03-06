import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Logininfo } from './logininfo.model';

export const LOGIN="LOGIN";

export class LoginstateAction implements Action
{
    readonly type=LOGIN; 

    constructor(public payload:Logininfo){
    }
}
export type Actions=LoginstateAction;