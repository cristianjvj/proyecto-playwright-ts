import { Page } from 'playwright';

export class ProductsPageElements{
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    get icons(){
        return{
            cart: this.page.locator('#shopping_cart_container'),
        }
    }

get otherElements(){
    return{
        pageTitle: this.page.locator('.product_label')
    }
}

    addToCartButton(productName: string){return this.page.locator(`//div[.='${productName}']/ancestor::div[@class='inventory_item']//button`)}
}