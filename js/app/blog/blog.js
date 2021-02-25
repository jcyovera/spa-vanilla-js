import AbstractView from "../models/AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Blog");
    }

    async getHtml() {
        return `
            <h1>Welcome Blog</h1>
            
        `;
    }
}