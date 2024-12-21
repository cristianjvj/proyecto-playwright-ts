import { Page } from 'playwright'
import { LoginPageElements } from './login-page.elements'

export class LoginPageMethods {
    private page: Page
    private loginPageElements: LoginPageElements

    constructor(page: Page) {
        this.page = page
        this.loginPageElements = new LoginPageElements(page)
    }

    async insertUserName(username: string) {
        await this.loginPageElements.testBoxes.username.fill(username)
        await this.loginPageElements.buttons.login.click()
    }

    async insertPassword(password: string) {
        await this.loginPageElements.testBoxes.password.fill(password)
    }

    async clickOnLoginButton() {
        await this.loginPageElements.buttons.login.click()
    }
}