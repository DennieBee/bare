import { Inject } from "./di/index";
import { click } from "./extensions/click";
import { Router } from "./router/index";

class App extends HTMLElement {
    private router: Router = window.$container.resolve("router");

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =`
<a id="navRoot">home</a>
<a id="navSignup">signup</a>
<router-view></router-view>
        `
        
        if (this.router !== null) {
            click(document.getElementById('navRoot'), () => {
                this.router.push("/");
            });
            
            click(document.getElementById('navSignup'), () => {
                this.router.push("/signup");
            });
        }
    }
}

export function RegisterApp() {
    customElements.define('app-root', App);
}