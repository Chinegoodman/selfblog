export function setlocalstorage(name,val) {
    if (!name) return;
    window.localStorage.setItem(name,val);
};
export function getlocalstorage(name) {
    if (!name) return;
    return window.localStorage.getItem(name);
};
export function removelocalstorage(name) {
    if (!name) return;
    window.localStorage.removeItem(name);
};