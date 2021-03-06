import {ISearchParams,ISearchResult} from '../app-models';
import {nanoid} from 'nanoid'

export const ADD_SEARCH = 'ADD_SEARCH';
export const ADD_RESERVATION = 'ADD_RESERVATION';
export const ADD_CONFIRMATION = 'ADD_CONFIRMATION';

export const addSearch = (searchParams:ISearchParams
    ,searchResults:ISearchResult[]) => {
    return {
        type: ADD_SEARCH,
        search: {
            Id: nanoid(),
            Params: searchParams,
            Results: searchResults
        }
    }

};

export const addReservation = (reserve:any) => {
    return {
        type: ADD_RESERVATION,
        detail: {
            ...reserve
        }
    }
};

export const addConfirm = (confirm:any) => {
    return {
        type: ADD_CONFIRMATION,
        detail: {
            ...confirm
        }
    }
}
