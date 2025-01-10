import { test } from '@playwright/test';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LoginPageMethods } from '../pages/login-page/login-page.methods';
import { ProductsPageMethods } from '../pages/products-page/products-page.methods';
import { Logger } from '../support/logger';
import { standardUser } from '../pages/login-page/login-page.interfaces';
import { CartPageMethods } from '../pages/cart-page/cart-page.methods';

test.describe('Cart test cases', async () => {
    test('Add product to cart', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Bolt T-Shirt'

        Logger.logPrecondition('Login with valid credentials')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.verifyProducstPageIsDisplayed()

        await productsPageMethods.clickOnAddToCart('Sauce Labs Bolt T-Shirt')
        await productsPageMethods.clickOnCartIcon()
        await cartPageMethods.verifyProductIsDisplayed(productName)

    });

    test('Remove product from cart', async ({ page }) => {
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Bolt T-Shirt'
        const commonPageMethods = new CommonPageMethods(page)

        Logger.logPrecondition('Item is added to the cart')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.clickOnAddToCart(productName)
        await productsPageMethods.clickOnCartIcon()
        await cartPageMethods.verifyProductIsDisplayed(productName)
        await cartPageMethods.clickOnRemoveButton(productName)
        await cartPageMethods.verifyProductIsNotDisplayed(productName)
    });

    test('Update product quantity in cart', async ({ page }) => {
        // test step
    });

    test('Verify product in cart', async ({ page }) => {
        // test step
    });
});