export function getLocationLocale(currentWindow: Location): string{
    return currentWindow.pathname.split('/')[1];
};

