import { Container } from "./di/index";

declare global {
    interface Window {
        $container: Container;
    }
}

export {};