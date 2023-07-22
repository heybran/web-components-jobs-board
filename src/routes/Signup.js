export default class BreezeSignup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get template() {
    return `
      <div>signup page</div>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = this.constructor.template;
  }
}

customElements.define('breeze-signup', BreezeSignup);