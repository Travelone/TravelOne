import { searchParams, ISearchParams
    , appState, IAppState } from '../app-models.js';
import {ADD_SEARCH} from './actions';

const INITIAL_STATE=new appState();

export function rootReducer (state=INITIAL_STATE,action:any) {
    switch(action.type){
        case ADD_SEARCH:
            
        default :
            return state
    }

}