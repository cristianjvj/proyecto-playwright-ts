import {test} from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { LoginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'
import { CartPageMethods } from '../pages/cart-page/cart-page.methods'
import { Logger } from '../support/logger'

const userCredentials = LoginPageData.credentials;

test('Login', async({page}) => {
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    const productsPageMethods = new ProductsPageMethods(page)
    const cartPageMethods = new CartPageMethods(page)

    await Logger.logStep('Navigate to the application')
    await commonPageMethods.navigateToTheApplication()
    await loginPageMethods.insertUserName(userCredentials.usernames.standardUser)
    await loginPageMethods.insertPassword(userCredentials.password)
    await loginPageMethods.clickOnLoginButton()
    await productsPageMethods.clickOnAddToCart('Sauce Labs Backpack')
    await productsPageMethods.clickOnCartIcon()
    await cartPageMethods.clickOnCheckoutButton()
    //await cartPageMethods.clickOnContinueShoppingButton()
    //await cartPageMethods.clickOnRemoveButton('Sauce Labs Backpack')
    // await commonPageMethods.openMenu()
    await page.waitForTimeout(4000)
    })