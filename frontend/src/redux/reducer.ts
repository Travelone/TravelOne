//import { searchParams, ISearchParams
//    , appState, IAppState, Search } from '../app-models.js';
import {ADD_SEARCH,ADD_RESERVATION,ADD_CONFIRMATION} from './actions';
//import {nanoid} from 'nanoid'

const INITIAL_STATE= {
    tabId: 0,
    objects: [{}]
};

var search : {[id:string]:{
    searchParams:any,
    searchResults:any
}} = {}

var reservation : {[id:string]:{detail:any}}

export function rootReducer (state=INITIAL_STATE,action:any) {
    const newTabId=state.objects.keys.length + 1
    switch(action.type){
        case ADD_SEARCH:
            return { 
                tabId: newTabId,
                objects: [...state.objects
                    , search[newTabId.toString()]={
                        searchParams: action.search.Params,
                        searchResults: action.search.Results
                } 
                ]
            }
        case ADD_RESERVATION:
            return {
                tabId: newTabId,
                objects: [...state.objects
                    , reservation[newTabId.toString()] = {...action.details}]
            }
        case ADD_CONFIRMATION:
            return {
                tabId: newTabId,
                objects: [...state.objects,action.details]
            }
        default :
            return state
    }

}