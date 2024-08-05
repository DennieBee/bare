export type RouteHandler = () => string;
export type RouteDefinition =  {
    [path: string]: RouteHandler;
}

export class Router {
    private _app!: HTMLElement;
    private _routes!: RouteDefinition;

    set routes(routes: RouteDefinition) {
        this._routes = routes;
        this.handleNavigation();
    }

    handleNavigation() : void {
        const appElement = document.getElementsByTagName("router-view")[0] as HTMLElement;
        if (appElement !== null) {
            appElement.innerHTML = this._routes[window.location.pathname]();
        }
    }

    push(route: string) : void {
        window.history.pushState({}, '', route);
        this.handleNavigation();
    }
}