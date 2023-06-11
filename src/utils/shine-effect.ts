export function shineEffect(element: HTMLElement | null) {
    if (!element) return;

    element.addEventListener('mousemove', (e) => mouseMoveEvent(e, element));

    return () =>
        element.removeEventListener('mousemove', (e) =>
            mouseMoveEvent(e, element)
        );
}

function mouseMoveEvent(e: MouseEvent, element: HTMLElement) {
    if (!element) {
        return;
    }

    const { x, y } = element.getBoundingClientRect();
    element.style.setProperty('--x', (e.clientX - x).toString());
    element.style.setProperty('--y', (e.clientY - y).toString());
}
