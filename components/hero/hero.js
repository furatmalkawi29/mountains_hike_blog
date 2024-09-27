class Hero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback () {
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.innerHTML = "page-hero"   
    }
}

customElements.define("page-hero", Hero)