export function setlocalstorage(name, val) {
    if (!name) return;
    window.localStorage.setItem(name, JSON.stringify(val));
};
export function getlocalstorage(name) {
    if (!name) return;
    return JSON.parse(window.localStorage.getItem(name));
};
export function removelocalstorage(name) {
    if (!name) return;
    window.localStorage.removeItem(name);
};