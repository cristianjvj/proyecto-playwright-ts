import {Page} from 'playwright'
import { CommonPageElements } from './common-page.elements'
import { Logger } from '../../support/logger';

export class CommonPageMethods {
    private page: Page
    private commonPageElements: CommonPageElements

    constructor(page) {
        this.page = page
        this.commonPageElements = new CommonPageElements(page)
    }

    async navigateToTheApplication() {
        await Logger.logStep('Navigating to the  application')
        await this.page.goto('https://www.saucedemo.com/v1//index.html')
    }
    async openMenu() {
        await Logger.logStep('Clicking on Open Menu button')
        await this.commonPageElements.buttons.openMenu.click()
    }

    async clickOnAllItemsOption() {
        await Logger.logStep('Clicking on All Items option')
        await this.commonPageElements.leftMenu.allItems.click()
    }

    async clickOnAboutOption() {
        await Logger.logStep('Clicking on About option')
        await this.commonPageElements.leftMenu.about.click()
    }

    async clickOnLogoutOption() {
        await Logger.logStep('Clicking on Logout option')
        await this.commonPageElements.leftMenu.logout.click()
    }

    async clickOnResetAppStateOption() {
        await Logger.logStep('Clicking on Reset App State option')
        await this.commonPageElements.leftMenu.resetAppState.click()
    }
}