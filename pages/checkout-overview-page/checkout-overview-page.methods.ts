import { Page } from 'playwright';
import { CheckoutOverviewPageElements } from './checkout-overview-page.elements';
import { Logger } from '../../support/logger';
import { expect } from '@playwright/test';

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

    async verifyCheckoutOverviewPageIsDisplayed(expectedText: string) {
        await Logger.logStep('Verify Checkout Overview page is displayed');
        await expect(this.checkoutOverviewPageElements.otherElements.checkoutOverviewTitle)
            .toBeVisible();
        await expect(this.checkoutOverviewPageElements.otherElements.checkoutOverviewTitle)
            .toHaveText(expectedText);
        await Logger.logStep('Checkout Overview page displayed successfully with the correct title');
    }
    
}