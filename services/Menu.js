import API from "./API.js";

export async function loadData() {
    app.store.menu = await API.fetchMenu();
}

export async function getProductById(id) {
    if(app.store.menu == null) {
        await loadData();
    }
    for(const category of app.store.menu) {
        for(const product of category.products) {
            if(product.id == id) {
                return product;
            }
        }
    }
    return null;
}