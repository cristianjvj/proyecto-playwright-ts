import { Page } from 'playwright'
import { LoginPageElements } from './login-page.elements'
import { Logger } from '../../support/logger'

export class LoginPageMethods {
    private page: Page
    private loginPageElements: LoginPageElements

    constructor(page: Page) {
        this.page = page
        this.loginPageElements = new LoginPageElements(page)
    }

    async insertUserName(username: string) {
        await Logger.logStep(`Inserting username: ${username}`)
        await this.loginPageElements.testBoxes.username.fill(username)
        await this.loginPageElements.buttons.login.click()
    }

    async insertPassword(password: string) {
        await Logger.logStep(`Insert password: ${password}`)
        await this.loginPageElements.testBoxes.password.fill(password)
    }

    async clickOnLoginButton() {
        await Logger.logStep('Clicking on login button')
        await this.loginPageElements.buttons.login.click()
    }
}