import { Page } from 'playwright'
import { LoginPageElements } from './login-page.elements'
import { Logger } from '../../support/logger'
import { expect } from '@playwright/test'
import { User } from './login-page.interfaces'

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
    }

    async insertPassword(password: string) {
        await Logger.logStep(`Insert password: ${password}`)
        await this.loginPageElements.testBoxes.password.fill(password)
    }

    async clickOnLoginButton() {
        await Logger.logStep('Clicking on login button')
        await this.loginPageElements.buttons.login.click()
    }

    async verifyMessage(expectedText: string) {
        await Logger.logStep('Getting error message')
        const text = await this.loginPageElements.otherElements.errorMessage.textContent()
        expect(text).toContain(expectedText)
    }

    async login(user: User) {
        await this.insertUserName(user.username)
        await this.insertPassword(user.password)
        await this.page.waitForTimeout(10000)
        await this.clickOnLoginButton()
    }
}