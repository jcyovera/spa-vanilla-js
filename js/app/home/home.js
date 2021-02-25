import AbstractView from "../models/AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
        this.loadTemplate();
    }
    async loadTemplate(){
        fetch("./js/app/home/home.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("#home").innerHTML = data;
        });
    }

    async getHtml() {
        return `
            <div id="home"></div>
        `;
    }
}