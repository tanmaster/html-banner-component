class PrivacyBanner extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const applicationName = this.getAttribute('application-name');
    const policyLink = this.getAttribute('policy-link');
    const onAcceptEventName = this.getAttribute('on-accept');
    this.innerHTML = `<div>In order to guarantee you the best possible service,
        ${applicationName} stores personal data.
        If you continue browsing the site, please agree to the
        <a href="${policyLink}">privacy policy</a>.</div>`;
    const btn = document.createElement('BUTTON');
    btn.innerText = 'All right!';
    btn.onclick = function() {
      this.dispatchEvent(new CustomEvent(onAcceptEventName,
          {
            bubbles: true,
            cancelable: false,
            composed: true,
          }));
    };
    const div = document.createElement('div');
    div.appendChild(btn);
    this.appendChild(div);
  }
}

window.customElements.define('privacy-banner', PrivacyBanner);
