import { click } from "../extensions/click";
import { Router } from "../router/index";

class Signup extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =`
<input id="input-text" type="text"></input>
<button id="signup-button">Signup</button>
        `
        
        click(document.getElementById('signup-button'), () => {
            alert((<HTMLInputElement>document.getElementById("input-text")).value);
        });
    }
}

export function RegisterSignupComponent() {
    customElements.define('app-signup', Signup);
}