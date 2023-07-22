export default class BreezeHome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get template() {
    return `
      <div>home page</div>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = this.constructor.template;
  }
}

customElements.define('breeze-home', BreezeHome);