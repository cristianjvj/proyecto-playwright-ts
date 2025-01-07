import { Page }from 'playwright'
import { ProductsPageElements } from './products-page.elements';
import { Logger } from '../../support/logger';
import { expect } from '@playwright/test';
export class ProductsPageMethods {
    private page: Page
    private productsPageElements: ProductsPageElements

    constructor(page: Page) {
        this.page = page
        this.productsPageElements = new ProductsPageElements(page)
    }

    async clickOnAddToCart(productName: string) {
        await Logger.logStep(`Click on Add to Cart button for product: ${productName}`)
        await this.productsPageElements.addToCartButton(productName).click()
    }

    async clickOnCartIcon() {
        await Logger.logStep('Click on Cart icon')
        await this.productsPageElements.icons.cart.click()
    }

    async verifyProducstPageIsDisplayed() {
        await Logger.logVerification('Verify that Products title is displayed')
        const elementsCount = await this.productsPageElements.otherElements.pageTitle.count()
        expect(elementsCount).toEqual(1)
    }
}