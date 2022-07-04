import {ActionType}  from "../action-types/index";
import {Data} from "../../Utility/macros"
import {Dispatch} from "redux";
import {Action} from "../actions/index"

export const addItem  = (item:Data)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.ADD,
            payload:item
        })
    }
}
