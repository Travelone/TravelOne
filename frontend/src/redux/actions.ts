import {ISearchParams,ISearchResult} from '../app-models';

export const ADD_SEARCH = 'ADD_SEARCH';

export const addSearch = (searchParams:ISearchParams
    ,searchResults:ISearchResult[]) => {
    return {
        type: ADD_SEARCH,
        search: {
            Id: "V1StGXR8_Z5jdHi6B",
            Params: searchParams,
            Results: searchResults
        }
    }

};
