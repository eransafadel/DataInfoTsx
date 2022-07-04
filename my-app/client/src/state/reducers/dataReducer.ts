import {Data} from '../../Utility/macros'
import { ActionType } from '../action-types';
import {Action} from '../actions/index'




const initialState:Array<Data> = [{name:"",gender:"",nation:""}];

const reducer  = (state=initialState, action:Action) =>{
    switch(action.type){
        case ActionType.ADD:
            return [...state,action.payload];
       default: 
            return state;
    }
   
};

export default reducer;