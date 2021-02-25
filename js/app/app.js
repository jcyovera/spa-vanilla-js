
import { Router } from "./shared/router.js";

//Routing App
let router = new Router();
window.addEventListener("popstate", router.load);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            router.navigateTo(e.target.href);
        }
    });

    router.load();
});