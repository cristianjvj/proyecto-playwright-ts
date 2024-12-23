import { Page } from 'playwright';
import { CartPageElements } from './cart-page.elements';

export class CartPageMethods {
    private page: Page
    private cartPageElements: CartPageElements

    constructor(page: any) {
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }

    async clickOnRemoveButton(productName: string) {
        await this.cartPageElements.removeButton(productName).click()
    }

    async clickOnContinueShoppingButton() {
        await this.cartPageElements.buttons.continueShopping.click()
    }

    async clickOnCheckoutButton() {
        await this.cartPageElements.buttons.checkout.click()
    }
}