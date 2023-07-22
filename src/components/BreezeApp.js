import "../routes/Signup.js";
import "../routes/Login.js";
import "./BreezeHeader.js";

export default class BreezeApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    window.BREEZE_APP = this;
  }

  connectedCallback() {
    this.render();
  }

  static get template() {
    return `
      <breeze-header></breeze-header>
      <main></main>
      <footer>footer</footer>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = this.constructor.template;
  }

  get content() {
    return this.shadowRoot?.querySelector('main');
  }

  set content(content) {
    this.shadowRoot.querySelector('main').innerHTML = content;
  }
}

customElements.define('breeze-app', BreezeApp)