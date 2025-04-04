import { getProductById } from "./Menu.js";

export async function addToCart(productId) {
    const product = await getProductById(productId);
    const results = app.store.cart.filter(p => p.id == productId);
    if(results.length > 0) {
        app.store.cart = app.store.cart.map(p => {
            if(p.id == productId) {
                p.quantity += 1;
            }
            return p;
        })
    } else {
        app.store.cart = [...app.store.cart, {...product, quantity: 1}]
    }
}

export function removeFromCart(productId) {
    app.store.cart = app.store.cart.filter(p => p.id != productId);
}