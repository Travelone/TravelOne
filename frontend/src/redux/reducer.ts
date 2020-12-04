//import { searchParams, ISearchParams
//    , appState, IAppState, Search } from '../app-models.js';
import {ADD_SEARCH,ADD_RESERVATION,ADD_CONFIRMATION} from './actions';
//import {nanoid} from 'nanoid'

const INITIAL_STATE= {
    tabId: 0,
    objects:[{}]
};

var search : {[id:string]:{
    searchParams:any,
    searchResults:any
}} = {}

var reservation : {[id:string]:{detail:any}}

export function rootReducer (state=INITIAL_STATE,action:any) {
    switch(action.type){
        case ADD_SEARCH:
            return { 
                tabId: action.search.Id,
                objects: [...state.objects
                    , search[action.search.Id]={
                        searchParams: action.search.Params,
                        searchResults: action.search.Results
                } 
                ]
            }
        case ADD_RESERVATION:
            return {
                tabId: action.detail.Id,
                objects: [...state.objects
                    , reservation[action.detail.Id] = {...action.details}]
            }
        case ADD_CONFIRMATION:
            const reserve:any = state.objects[action.detail.id]
            reserve.confirm =true 
            delete state.objects[action.detail.id]
            return {
                tabId: action.detail.Id,
                objects: [...state.objects,action.details]
            }
        default :
            return state
    }

}