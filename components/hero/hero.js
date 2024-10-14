import heroTemplate from "./template.js";
import { parallaxScrollHandler } from '../../helpers/parallax.js';

class Hero extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
  }

  initializeTemplate() {
    this.template.innerHTML = heroTemplate;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    this.initializeTemplate();
    const templateContent = this.template?.content?.cloneNode(true);
    shadowRoot.appendChild(templateContent);
    window.addEventListener("scroll", (e) => parallaxScrollHandler(window, shadowRoot));
  }
  disconnectedCallback() {
    window.removeEventListener("scroll", (e) => parallaxScrollHandler(window, shadowRoot));
  }
}

customElements.define("page-hero", Hero);
