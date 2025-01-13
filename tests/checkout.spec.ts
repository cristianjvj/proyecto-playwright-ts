import { test } from '@playwright/test';
import { Logger } from '../support/logger';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LoginPageMethods } from '../pages/login-page/login-page.methods';
import { ProductsPageMethods } from '../pages/products-page/products-page.methods';
import { CartPageMethods } from '../pages/cart-page/cart-page.methods';
import { standardUser } from '../pages/login-page/login-page.interfaces';
import { CheckoutPageMethods } from '../pages/checkout-page/checkout-page.methods';
import { CheckoutOverviewPageElements } from '../pages/checkout-overview-page/checkout-overview-page.elements';
import { CheckoutOverviewPageMethods } from '../pages/checkout-overview-page/checkout-overview-page.methods';

test.describe.only('Checkout test cases', async () => {

    test('Checkout with valid credentials', async ({ page }) => {
        const commonPageHelper = new CommonPageMethods(page);
        const loginPageMethods = new LoginPageMethods(page);
        const productsPageMethods = new ProductsPageMethods(page);
        const cartPageMethods = new CartPageMethods(page);
        const checkoutPageMethods = new CheckoutPageMethods(page);
        const checkoutOverviewPageMethods = new CheckoutOverviewPageMethods(page);
        const productName = 'Sauce Labs Onesie';
        const expectedText = 'Checkout: Overview';

        await Logger.logPrecondition('User has items in the cart');
        await commonPageHelper.navigateToTheApplication();
        await loginPageMethods.login(standardUser);
        await productsPageMethods.clickOnAddToCart(productName);
        
        await productsPageMethods.clickOnCartIcon();
        await cartPageMethods.verifyProductIsDisplayed(productName);
        await cartPageMethods.clickOnCheckoutButton();
        await checkoutPageMethods.insertFirstName('Something');
        await checkoutPageMethods.insertLastName('Something Better');
        await checkoutPageMethods.insertPostalCode('12345');
        await cartPageMethods.clickOnContinueShoppingButton()
        await checkoutOverviewPageMethods.verifyCheckoutOverviewPageIsDisplayed(expectedText);
        await page.waitForTimeout(5000);
    });

    test('Checkout with invalid credentials', async ({ page }) => {
        // test step
    });

    test('Verify checkout page', async ({ page }) => {
        // test step
    });

    test('Verify checkout page is displayed', async ({ page }) => {
        // test step
    });
});