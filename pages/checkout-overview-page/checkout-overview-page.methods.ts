import { Page } from 'playwright';
import { CheckoutOverviewPageElements } from './checkout-overview-page.elements';
import { Logger } from '../../support/logger';

export class CheckoutOverviewPageMethods {
    private page: Page;
    private checkoutOverviewPageElements: CheckoutOverviewPageElements;

    constructor(page: Page) {
        this.page = page;
        this.checkoutOverviewPageElements = new CheckoutOverviewPageElements(page);
    }

    async clickOnCancelButton() {
        await Logger.logStep('Click on Cancel button on Checkout Overview page');
        await this.checkoutOverviewPageElements.buttons.cancel.click();
    }

    async clickOnFinishButton() {
        await Logger.logStep('Click on Finish button on Checkout Overview page');
        await this.checkoutOverviewPageElements.buttons.finish.click();
    }
}