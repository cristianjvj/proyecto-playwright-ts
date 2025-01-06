import { Page } from 'playwright';
import { CheckoutPageElements } from './checkout-page.elements';
import { Logger } from '../../support/logger';

export class CheckoutPageMethods {
    private page: Page;
    private checkoutPageElements: CheckoutPageElements;

    constructor(page: Page) {
        this.page = page;
        this.checkoutPageElements = new CheckoutPageElements(page);
    }

    async insertFirstName(firstName: string ) {
        await Logger.logStep(`Insert first name: ${firstName}`);
        await this.checkoutPageElements.inputs.firstName.fill(firstName);
    }

    async insertLastName(lastName: string) {
        await Logger.logStep(`Insert last name: ${lastName}`);
        await this.checkoutPageElements.inputs.lastName.fill(lastName);
    }

    async insertPostalCode(postalCode: string) {
        await Logger.logStep(`Insert postal code: ${postalCode}`);
        await this.checkoutPageElements.inputs.postalCode.fill(postalCode);
    }

    async clickContinue() {
        await Logger.logStep('Click on Continue button on Checkout page');
        await this.checkoutPageElements.buttons.continue.click();
    }

    async clickCancel() { 
        await Logger.logStep('Click on Cancel button on Checkout page');
        await this.checkoutPageElements.buttons.cancel.click();
    }
}