//import { searchParams, ISearchParams
//    , appState, IAppState, Search } from '../app-models.js';
import {ADD_SEARCH} from './actions';
//import {nanoid} from 'nanoid'

const INITIAL_STATE= {
    tabId: 0,
    objects: [{}]
};

export function rootReducer (state=INITIAL_STATE,action:any) {
    switch(action.type){
        case ADD_SEARCH:
            const newTabId=state.objects.keys.length + 1
            const search = {
                searchParams: action.search.Params,
                searchResults: action.search.Results
            }

            return { 
                tabId: newTabId,
                objects: [...state.objects, search
                ]
            }
        default :
            return state
    }

}