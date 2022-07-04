import {Data} from '../../Utility/macros';
import {ActionType} from "../action-types/index";

interface AddAction{
    type:ActionType.ADD,
    payload:Data
}

interface DeleteAction{
    type:ActionType.DELETE,
    payload:Data
}


export type Action = AddAction | DeleteAction ;

