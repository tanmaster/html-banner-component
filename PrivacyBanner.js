

class PrivacyBanner extends HTMLElement {
  constructor() {
    super();
    this.applicationName = this.getAttribute('application-name');
    this.policyLink = this.getAttribute('policy-link');
    this.onAccept = this.getAttribute('on-accept');
  }


  connectedCallback() {
    this.innerHTML = `Um Ihnen den bestmöglichen Service zu gewärhleisten\\n' +
        'speichert ${this.applicationName} personenbezogene Daten.\\n' +
        'Wenn Sie auf der Seite weitersurfen stimmen Sie\\n' +
        'bitte der <a href="${this.policyLink}">Datenschutz-Richtlinie</a> zu.`;
  }

  disconnectedCallback() {

  }
}

window.customElements.define('privacy-banner', PrivacyBanner);

console.log('asd');