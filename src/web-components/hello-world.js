export class HelloWorld extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<h1>Hello World!</h1>`;
    // shadowRoot.innerHTML = ` 
    // <style>
    //     .kitten {
    //         background: gray;
    //         border-radius: 3px;
    //         padding: 6px;
    //     }
    // </style>
    // <img class='kitten' src='https://placekitten.com/200/300' />
    // `;
  }
}

customElements.define('hello-world', HelloWorld);
