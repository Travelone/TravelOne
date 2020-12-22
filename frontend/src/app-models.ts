import { create } from 'domain';
import { nanoid } from 'nanoid';

export interface ISearchParams {
  from: string;
  to: string;
  embarkDate: any;
  passenger: number;
  return: boolean;
  returnDate?: any;
}

export class searchParams {
  create():ISearchParams {
    return {
      from: '',
      to: '',
      embarkDate: Date.now(),
      passenger: 1,
      return: false,
      returnDate: null,
    };
  }
}

export interface ISearchResult {
  id : number,
  uuid : string,
  from : string
  to : string
  date : string,
  time : string,
  name : string,
  description : string,
  avail : number,
  fare: number 
}

export interface ISearch {[id:string]:{
  searchParams:ISearchParams,
  searchResults:ISearchResult[]
}}

export interface IEvent{
  event: string
}

export interface IReservation {[id:string]:{
  uuid : string,
  from : string,
  to : string,
  date : string,
  time : string,
  name : string,
  description : string,
  vesselId: string,
  fare : number,
  seats: number,
  confirm: boolean
}}

export interface IAppState {
  tabId: Number,
  objects:object
}

