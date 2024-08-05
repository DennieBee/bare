
import { Container } from './di/index'
import { RegisterApp } from './app'
import { Router, RouteDefinition } from './router/index'
import { RegisterHomeComponent } from './components/home';
import { RegisterSignupComponent } from './components/signup';

window.$container = new Container();
window.$container.register("router", Router);
RegisterApp();
RegisterHomeComponent();
RegisterSignupComponent();

const routes: RouteDefinition = {
    '/': () : string => "<app-home></app-home>",
    '/signup': () : string => "<app-signup></app-signup>",
}

let router: Router = window.$container.resolve("router");
router.routes = routes;

