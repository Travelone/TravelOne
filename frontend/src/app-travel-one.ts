import { Router } from '@vaadin/router';
import './app-home';
import './app-reservation';
import './app-confirmation';
//import { store } from './redux/store';
//import { Store } from 'redux';

//const state = store.getState()
const outlet = document.querySelector('output');
const router = new Router(outlet);

window.addEventListener('load', () => { 
  init_router();
});

const renderLanding = (context: any, command: any) => {
  //import(/* webpackChunkName: "home" */ './app-home')
  const view = command.component('app-home')
  return view
}

const renderReservation = (context: any, command: any) => {

  const view = command.component('app-reservation')
  view.reservationCode = context.params.reservationCode
  return view
}

const renderConfirmation = (context: any, command: any) => {

  const reserveDetail: any = window.localStorage.getItem(context.params.reservationCode) || '{}'
  //console.log(context.params.reservationCode)
  const view = command.component('app-confirmation')
  view.reservationDetail = reserveDetail
  return view
}

const renderSearch = (context: any, command: any) => {
  const view = command.component('app-search-result')
  return view
}

function init_router(){
router.setRoutes([
  {
    path: '/',
    action: renderLanding
  },

  {
    path: '/search/:searchCode',
    action: renderSearch
  },
  {
    path: '/reservation/:reservationCode',
    action: renderReservation
  },
  {
    path: '/reservation/confirmation/:reservationCode',
    action: renderConfirmation
  },

]
)};
