import { Page } from 'playwright';

export class CheckoutOverviewPageElements {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get buttons() {
        return {
            cancel: this.page.locator('.cart_cancel_link'),
            finish: this.page.locator('.cart_button'),
        }
    }

    get otherElements() {
        return {
            checkoutOverviewTitle: this.page.locator('.subheader'),
        }
    }
}