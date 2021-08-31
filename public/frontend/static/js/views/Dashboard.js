import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back!</h1>
        <p>
            You have reached the dashboard. This application utilizes JavaScript/Node.js/Express.js and 
            demonstrates the "single page application" concept. Notice that you can navigate the menu, link, 
            and browser arrows without the page refreshing.
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
        
        `;
    }
}