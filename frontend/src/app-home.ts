import './feature/app-search-block.js';
import './feature/app-search-cards';
import { html, customElement, property, css } from 'lit-element';
import '../../node_modules/@polymer/paper-card/paper-card.js';
import '@material/mwc-button';
import { mainStyle } from './app-styles';
import {BaseView} from './base-view';
import { RESOURCES_URL, RESTAPI_URL } from './app-config'


import { connect } from 'pwa-helpers';
import { Store } from './redux/store';
import { addSearch, addReservation } from './redux/actions'



@customElement('app-home')
class appLanding extends connect(Store)(BaseView) {

  @property()
  searchResult: any;

  //@property()
  searchParams = undefined;

  currentTabId: number = 0;

  RESOURCES_URL = RESOURCES_URL;
  RESTAPI_URL = RESTAPI_URL;

  STATE: any;

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

        @media (max-width: 768px) {
          app-search-cards {
            width: 100%;
          }
        }

      `,
    ];
  }

  stateChanged(state: any) {
    
    this.STATE = state
    this.requestUpdate()

  }

  async add_search(e: any) {

    const url = Object.keys(e.detail)
      .map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(e.detail[k]);
      })
      .join('&');
    const RESTAPI_URL = this.RESTAPI_URL + '/schedule?' + url;
    const searchResult = await fetch(RESTAPI_URL).then(res => res.json());
    Store.dispatch(addSearch(e.detail, searchResult))
    //}
  }

  render() {

    return html`
      <body>
        <app-search-block id="query-block"
          @searchClicked=${(e: any) => this.add_search(e)}
        ></app-search-block>
        <app-search-cards
          .tabId=${this.STATE.tabId}
          .searchResult = ${this.STATE.objects[this.STATE.tabId] ?
            this.STATE.objects[this.STATE.tabId].searchResults : []}
          .RESOURCES_URL=${this.RESOURCES_URL}
        >
        </app-search-cards>
      </body>
    `;
  }
}
