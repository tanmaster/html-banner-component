

class PrivacyBanner extends HTMLElement {
  constructor() {
    super();
    this.applicationName = this.getAttribute('application-name');
    this.policyLink = this.getAttribute('policy-link');
    this.onAccept = this.getAttribute('on-accept');
  }


  connectedCallback() {
    this.innerHTML = `Um Ihnen den bestmöglichen Service zu gewärhleisten
        speichert ${this.applicationName} personenbezogene Daten.
        Wenn Sie auf der Seite weitersurfen stimmen Sie
        bitte der <a href="${this.policyLink}">Datenschutz-Richtlinie</a> zu. <button>Alles Klar!</button>`;
  }

  disconnectedCallback() {

  }
}

window.customElements.define('privacy-banner', PrivacyBanner);
