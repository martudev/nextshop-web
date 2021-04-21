
export const colors = {
    primary: '#0070f3',
    secondary: '#0461cc'
}

export function isMobile() {
    const x = window.matchMedia("(max-width: 600px)");
    if (x.matches) return true;
    return false;
}