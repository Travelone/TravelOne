import { create } from 'domain';
import { nanoid } from 'nanoid';

export interface ISearchParams {
  from: string;
  to: string;
  embarkDate: Date;
  passenger: number;
  return: boolean;
  returnDate?: Date;
}

export class searchParams {
  create() {
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

export class SearchResult {
  create() {
    return {
      id : 0,
      uuid : "",
      from : "",
      to : "",
      date : "",
      time : "",
      name : "",
      description : "",
      avail : 1,
      fare: 0 
    }
  }
}

export interface ISearch {
  searchId: string;
  searchParams: ISearchParams,
  searchResults: [ISearchResult]
}

export class Search {
  create(){
    return {
      searchId: "V1StGXR8_Z5jdHi6B",
      searchParams: new searchParams(),
      searchResults: [new SearchResult()],
    }
  }
}

export interface IEvent{
  event: string
}

export interface IReservation {
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
}

export class Reservation {
  create(){
    return {
      uuid : "",
      from : "",
      to : "",
      date : "",
      time : "",
      name : "",
      description : "",
      vesselId: "",
      fare : 0,
      seats: 0,
      confirm: false
    }
    }
  }

export interface IAppState {
  tabId: Number,
  objects:[]
}

export class appState {
  create() {
    return {
      tabId: 0,
      objects:[]
    }
  }
}