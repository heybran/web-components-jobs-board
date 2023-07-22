export default class BreezeHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get template() {
    return `
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = this.constructor.template;
  }
}

customElements.define('breeze-header', BreezeHeader);