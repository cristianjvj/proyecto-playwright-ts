import { Page } from 'playwright';

export class CartPageElements {
    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    removeButton(productName: string) {
        return this.page.locator(`//div[.="${productName}"]//ancestor::div[@class="cart_item_label"]//button`)
    }

    get buttons() {
        return{
            continueShopping: this.page.locator('[value="CONTINUE"]'),
            checkout: this.page.locator('a[href*="checkout"]')
        }
    }
}