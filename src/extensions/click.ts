// Replaced in RouterActor such as a link or a button, but for now global ambient

type ClickHandler = () => void;
export function click(element: HTMLElement | null, handler: ClickHandler) : void {
    if (element !== null) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            handler();
        });
    }
}
