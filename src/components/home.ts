import { click } from "../extensions/click";
import { Router } from "../router/index";

class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =`
<button id="home-button">Home Action</button>
        `
        
        click(document.getElementById('home-button'), () => {
            alert('Whiee');
        });
    }
}

export function RegisterHomeComponent() {
    customElements.define('app-home', Home);
}