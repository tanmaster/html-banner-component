

class PrivacyBanner extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const applicationName = this.getAttribute('application-name');
    const policyLink = this.getAttribute('policy-link');
    const onAccept = this.getAttribute('on-accept');
    console.log(onAccept);
    this.innerHTML = `In order to guarantee you the best possible service,
        ${applicationName} stores personal data.
        If you continue browsing the site, please agree to the
        <a href="${policyLink}">privacy policy</a>.`;
    const btn = document.createElement('BUTTON');
    btn.innerText = 'All right!';
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
