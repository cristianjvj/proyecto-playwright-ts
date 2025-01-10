import { Page } from 'playwright';
import { CartPageElements } from './cart-page.elements';
import { Logger } from '../../support/logger';
import { expect } from '@playwright/test';

export class CartPageMethods {
    private page: Page
    private cartPageElements: CartPageElements

    constructor(page: any) {
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }

    async clickOnRemoveButton(productName: string) {
        await Logger.logStep(`Click on Remove button for ${productName}`)
        await this.cartPageElements.removeButton(productName).click()
    }

    async clickOnContinueShoppingButton() {
        await Logger.logStep('Click on Continue Shopping button')
        await this.cartPageElements.buttons.continueShopping.click()
    }

    async clickOnCheckoutButton() {
        await Logger.logStep('Click on Checkout button')
        await this.cartPageElements.buttons.checkout.click()
    }

    async verifyProductIsDisplayed(productName: string) {
    await Logger.logVerification(`The product "${productName}" is displayed in the cart`)
    const productsCount = await this.cartPageElements.removeButton(productName).count()    
    expect(productsCount).toEqual(1)
    }

    async verifyProductIsNotDisplayed(productName: string) {
        await Logger.logVerification(`The product "${productName}" is not displayed in the cart`)
        const productsCount = await this.cartPageElements.removeButton(productName).count()
        expect(productsCount).toEqual(0)
    }
}