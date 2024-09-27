class StepCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = "StepCard content";
  }
}

customElements.define("step-card", StepCard);

console.log("StepCard");
