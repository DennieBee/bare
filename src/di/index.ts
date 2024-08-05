export type Constructor<T> = new (...args: any[]) => T;

export class Container {
    private services = new Map<string, any>();

    register<T>(name: string, service: Constructor<T>) {
        this.services.set(name, new service());
    }

    resolve<T>(name: string): T {
        const service = this.services.get(name);
        if (!service) {
            throw new Error(`Service ${name} not found`);
        }
        return service;
    }
}

export function Inject(serviceName: string) {
    return function (target: any, propertyKey: string) {
        alert();
        const injectedService = window.$container.resolve(serviceName);

        Object.defineProperty(target, propertyKey, {
            get: () => injectedService,
            enumerable: true,
            configurable: true,
        });
    };
}
