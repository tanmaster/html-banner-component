

class PrivacyBanner extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const applicationName = this.getAttribute('application-name');
    const policyLink = this.getAttribute('policy-link');
    const onAccept = this.getAttribute('on-accept');
    console.log(onAccept);
    this.innerHTML = `Um Ihnen den bestmöglichen Service zu gewärhleisten
        speichert ${applicationName} personenbezogene Daten.
        Wenn Sie auf der Seite weitersurfen stimmen Sie
        bitte der <a href="${policyLink}">Datenschutz-Richtlinie</a> zu.`;
    const btn = document.createElement('BUTTON');
    btn.innerText = 'Alles Klar!';
    btn.onclick = function() {
      this.dispatchEvent(new CustomEvent('on-accept',
          {
            bubbles: true,
            cancelable: false,
            composed: true,
          }));
    };
    this.appendChild(btn);
  }
}

window.customElements.define('privacy-banner', PrivacyBanner);
