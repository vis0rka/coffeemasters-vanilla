import API from "./API.js";

export async function loadData() {
    const menu = await API.fetchMenu();
    app.store.menu = menu;
}