export default class BreezeLogin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get template() {
    return `
      <div>login page</div>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = this.constructor.template;
  }
}

customElements.define('breeze-login', BreezeLogin);