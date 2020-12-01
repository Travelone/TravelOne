import '@polymer/paper-card'
import { LitElement, html, customElement, property, css } from 'lit-element';
import { mainStyle } from '../app-styles';

@customElement('app-search-cards')
class appSearchCards extends LitElement {
  @property()
  searchResult: any;

  @property()
  tabId: any;

  @property()
  RESOURCES_URL: any;

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
            }`
    ]
  }

  constructor() {
    super()
    this.tabId = 0;
  }

  _clickReserve(obj: any) {
    this.dispatchEvent(
      new CustomEvent('reserveClicked', { detail: obj })
    );
  }

  cards(obj: any) {
    return html` <paper-card
          heading=${obj.name}
          alt=${obj.name}
          id=${obj.uuid}
        >
          <div class="card-content">
            <div id="left" class="column">
              <img src=${this.RESOURCES_URL + '/images/kapal.' + obj.id + '.jpg'} />
            </div>
            <div id="right" class="column">
              <div>
                <p>From: ${obj.from}</p>
                <p>To: ${obj.to}</p>
              </div>
              <div>
                <p>Time: ${obj.time}</p>
              </div>
              <div>
                <p>
                  Description: ${obj.description}
                </p>
              </div>
            </div>
          </div>
          <div class="card-actions">
            <mwc-button
              raised
              @click=${(e: any) => { this._clickReserve(obj) }}
              >Reserve</mwc-button
            >
          </div>
        </paper-card>`;
  }


  render() {
    //console.log('cards', this.searchResult)
    return html`
          <body>
            <div class="search-results" >   
                ${((this.searchResult !== undefined) ?
        this.searchResult.map((obj: any, idx: number) => {
          return this.cards(obj)
        }) : '')
      }
            </div>
          </body>
        `;
  }
}