import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";


import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import ProductItem  from "./components/ProductItem.js";
import CartItem from "./components/CartItem.js";

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    await loadData();
    app.router.init();
}); 

window.addEventListener("appcartchange", () => {
    const badge = document.getElementById("badge");
    const qty = app.store.cart.reduce((acc, curr) => acc + curr.quantity, 0);

    badge.textContent = qty;
    badge.hidden = qty == 0;
})
