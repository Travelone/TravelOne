import { LitElement, customElement, html, property, css } from 'lit-element';
import '@material/mwc-button';
import { mainStyle } from './app-styles';
import { BaseView } from './base-view';
import { RESTAPI_URL } from './app-config'
import { IReservation} from './app-models'

import { connect } from 'pwa-helpers';
import { Store } from './redux/store';


@customElement('app-reservation')
export class reservation extends connect(Store) (BaseView) {
  //@property()
  reservationDetail: any = [];

  reservationCode:string='';

  RESTAPI_URL = RESTAPI_URL;

  STATE:any;

  static get styles() {
    return [
      mainStyle,
      css`
        mwc-button {
          --mdc-theme-primary: var(--search-block-theme-primary);
          --mdc-theme-on-primary: var(--search-block-theme-on-primary);
          --mdc-theme-secondary: var(--search-block-theme-primary);
          --mdc-theme-on-secondary: var(--search-block-theme-on-primary);
        }
        
        div {
          margin: 5px 5px 5px 5px;
        }

      `,
    ];
  }

  stateChanged(state: any) {
    this.STATE = state
    
    const res = state.objects[state.tabId].searchResults
    const _res = this.reservationCode
    const reservationDetail = res.filter(
      function(sched:any) {return sched.uuid == _res } )
    //console.log(reservationDetail[0])
    if (this.reservationDetail !== reservationDetail[0]){
      this.reservationDetail = reservationDetail[0]
      //this.requestUpdate()
    }

  }

  _cancelReservation(e: any) { }

  async _confirmReservation(e: any) {
    //console.log('_confirmReservation');
    const rawResponse = await fetch(this.RESTAPI_URL + '/reservation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.reservationDetail)
    }).then(function (response) { return response }, function (error) { return error });
    const content = rawResponse;
    const _uuid = JSON.parse(this.reservationDetail)['uuid']
    //console.log(content,  this.reservationDetail, _uuid);
    window.location.href = 'reservation/confirmation/' + _uuid;

  }

  render() {
    //console.log(this.STATE)
    //const res = JSON.parse(this.reservationDetail)
    const res = this.reservationDetail
    return html`<div class="container">
      <div>
        <p class="reserveId">Reservation code: ${res.uuid}</p>
        <p class="from">From: ${res.from}</p>
        <p class="to">To: ${res.to}</p>
        <p class="date">Date: ${res.date}</p>
        <p class="time">Time: ${res.time}</p>
        <p class="noPassanger"># Passenger: ${res.seats}</p>
        <p fare="fare">Total fare: ${res.fare}</p>
      </div>
      <div class="action">
        <div class="cancel">
          <mwc-button
            id="cancelId"
            label="Cancel"
            raised
            @click=${this._cancelReservation}
            ></mwc-button
          >
        </div>
        <div class="confirm">
          <mwc-button
            id="confirmId"
            label="Confirm"
            raised
            @click=${this._confirmReservation}
            ></mwc-button
          >
        </div>
      </div>
    </div>`;
  }
}
