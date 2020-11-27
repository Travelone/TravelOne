import './feature/app-search-block.js';
import './feature/app-search-cards';
import { LitElement, html, customElement, property, css } from 'lit-element';
import '../../node_modules/@polymer/paper-card/paper-card.js';
import '@material/mwc-button';
import { mainStyle } from './app-styles';

import { connect } from 'pwa-helpers';
import { store } from './redux/store';
import { addSearch, ADD_SEARCH } from './redux/actions'
import { RESOURCES_URL, RESTAPI_URL} from './app-config'


@customElement('app-home')
class appLanding extends connect(store)(LitElement) {

  @property()
  searchResult: any;

  @property()
  searchParams: any = undefined;

  currentTabId: number =0;

  RESOURCES_URL = RESOURCES_URL;
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

        paper-card {
          text-align: left;
          width: 100%;
          max-width: 850px;
          margin: 15px auto 15px auto;
          display: grid;
        }

        mwc-landing {
          align-content: center;
          margin: auto;
        }

        .card-content {
          padding: 10px;
          float: left;
        }

        .card-content img {
          margin: auto;
          width: 100px;
          height: 100px;
        }

        .column {
          padding-left: 2%;
          float: left;
          width: 44%;
        }

        .card-actions {
          float:none;
        }

        .card-actions a:link {
          text-decoration: none;
        }

        .search-results {
          display: block;
          margin: auto;
          text-align:center;
        }

        @media (max-width: 768px) {
          paper-card {
            width: 100%;
          }
        }

      `,
    ];
  }

  stateChanged(state:any) {
    //console.log(state)
    this.STATE=state
    
    //this.currentTabId = state.tabId
    //this.searchResult = state.objects[state.tabId].searchResults
    //console.log('state changed', state.tabId,state.objects[state.tabId])
  }

  async add_search(e: any){
    if ( this.searchParams === undefined ) {
      this.searchParams = e.detail
      const url = Object.keys(e.detail)
        .map(function (k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(e.detail[k]);
        })
        .join('&');
      const RESTAPI_URL = this.RESTAPI_URL + '/schedule?' + url;
      const searchResult = await fetch(RESTAPI_URL).then(res => res.json());
      store.dispatch(addSearch(e.detail,searchResult))
      }
  }

  clickReservation(obj: any) {

    const href = 'reservation/' + obj.uuid
    const _detail_ = {
      "uuid": obj.uuid,
      "from": obj.from,
      "to": obj.to,
      "date": obj.date,
      "time": obj.time,
      "description": obj.description,
      "vesselId": obj.id,
      "fare": obj.fare,
      "seats": this.searchParams.passanger
    }

    window.localStorage.setItem(obj.uuid, JSON.stringify(_detail_))
    window.location.href = 'reservation/' + obj.uuid
  }

  render() {
    console.log(this.STATE)
    return html`
      <body>
        <app-search-block id="query-block"
          @searchClicked=${(e: any) => this.add_search(e)}
        ></app-search-block>
        <app-search-cards
          .tabId=${this.STATE.tabId}
          .searchResult = ${this.STATE.objects[this.STATE.tabId]?
                this.STATE.objects[this.STATE.tabId].searchResults:[]}
          @reserveClicked=${(e:any) => this.clickReservation(e)}
        >
        </app-search-cards>
      </body>
    `;
  }
}
