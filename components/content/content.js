import { parallaxScrollHandler } from '../../helpers/parallax.js';
import contentTemplate from './template.js';

class Content extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
  }


  initializeTemplate() {
    this.template.innerHTML = contentTemplate;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    this.initializeTemplate();
    const templateContent = this.template?.content?.cloneNode(true);
    shadowRoot.appendChild(templateContent);

    window.addEventListener("scroll", (e) => parallaxScrollHandler(window, shadowRoot));
  }
}

customElements.define("page-content", Content);
