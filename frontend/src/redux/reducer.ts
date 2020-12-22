import { ISearch, ISearchParams
    , IReservation, IAppState } from '../app-models.js';
import {ADD_SEARCH,ADD_RESERVATION,ADD_CONFIRMATION} from './actions';
//import {nanoid} from 'nanoid'
const INITIAL_STATE:IAppState= {
    tabId: 0,
    objects:{}
};

var search : ISearch = {}

var reservation : IReservation ={}

export function rootReducer (state:IAppState=INITIAL_STATE,action:any) : IAppState {
    switch(action.type){
        case ADD_SEARCH:
            search [action.search.Id]={
                searchParams: action.search.Params,
                searchResults: action.search.Results}

            return { 
                tabId: action.search.Id,
                objects: {...state.objects,...search}
            }
        case ADD_RESERVATION:
            reservation[action.detail.uuid]=
                            {...action.detail}
            return {
                tabId: action.detail.uuid,
                objects: 
                    {...state.objects
                        ,reservation
                }
            }
        case ADD_CONFIRMATION:
            //const reserve:any = state.objects[action.detail.id]
            //reserve.confirm =true 
            //delete state.objects[action.detail.id]
            return {
                tabId: action.detail.Id,
                objects:{}
                //objects: [...state.objects,action.details]
            }
        default :
            return state
    }

}