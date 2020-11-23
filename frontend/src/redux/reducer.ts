import { searchParams, ISearchParams
    , appState, IAppState, Search } from '../app-models.js';
import {ADD_SEARCH} from './actions';
//import {nanoid} from 'nanoid'

const INITIAL_STATE= {
    tabId: 0,
    objects:[]
};

export function rootReducer (state=INITIAL_STATE,action:any) {
    switch(action.type){
        case ADD_SEARCH:
            return { 

            }
        default :
            return state
    }

}