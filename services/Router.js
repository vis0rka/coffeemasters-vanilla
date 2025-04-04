const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                
                const url = e.target.getAttribute("href");
                console.log(url);
                Router.go(url);
            });
        });
        window.addEventListener("popstate", (e) => {
            Router.go(e.state.route, false);
        });

        //Check inital url
        Router.go(location.pathname);
    },
    go: (route, addHistory = true) => {
        if(addHistory){
            history.pushState({route}, "", route);
        }
        let pagElement = null;
        switch(route){
            case "/":
                pagElement = document.createElement("menu-page");
                console.log(pagElement);
                break;
            case "/order":
                pagElement = document.createElement("order-page");
                console.log("order");
                break;
            default:
                if(route.startsWith("/product-")){
                    pagElement = document.createElement("details-page");
                    const paramId = route.substring(route.lastIndexOf("-") + 1);
                    pagElement.dataset.productId = paramId;
                }
        }
        if(pagElement){
            const cache = document.querySelector("main");
            cache.innerHTML = "";
            cache.appendChild(pagElement);
            window.scrollX = 0;
            window.scrollY = 0;
        }
    }
}

export default Router;