import headerTemplate from "./template.js";
class Header extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
  }
  
  initializeTemplate() {
    this.template.innerHTML = headerTemplate;
  }
  
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.initializeTemplate();
    const templateContent = this.template?.content?.cloneNode(true);
    shadowRoot.appendChild(templateContent);
  }

  disconnectedCallback() {

  }
}

customElements.define("page-header", Header);