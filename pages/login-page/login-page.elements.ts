import { Page } from 'playwright';

export class LoginPageElements {
    private page : Page

    constructor(page) {
        this.page = page;
    }

    get testBoxes() {
        return{
            username: this.page.locator('[data-test="username"]'),
            password: this.page.locator('[data-test="password"]')
        }    
}

    get buttons() {
        return {
            login: this.page.locator('#login-button')
        }
    }
}