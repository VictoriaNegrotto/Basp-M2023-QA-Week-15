import LoginPage from "../pageobjects/loginpage.js";
import UserHomePage from "../pageobjects/homePageUser.js";

describe('go landing page user', () =>{
    beforeAll('open browser', () =>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('succes process', async() =>{
        await expect (LoginPage.loginButton).toBeDisplayed();
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginform("standard_user", "secret_sauce");
        await LoginPage.loginButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it ('home page explore', async () =>{
        await expect (UserHomePage.productsText).toBeDisplayed();
        await expect (UserHomePage.buttonBurguer).toBeDisplayed();
        await expect (UserHomePage.containerInventory).toBeDisplayed();
        await UserHomePage.productImageClick();
        await UserHomePage.backProductsButtonClick();
        await expect (UserHomePage.containerInventory).toBeDisplayed();
        await UserHomePage.addToCartJacketButtonClick();
    });

    it('navigate and shopping', async () =>{
        await UserHomePage.productImage2Click();
        await expect (UserHomePage.productTshirt).toBeDisplayed();
        await UserHomePage.addToCartButtonTshirtClick();
        await UserHomePage.addToCartButtonShoppingClick();
        await expect (UserHomePage.cartDescribeTshirt).toBeDisplayed();
        await UserHomePage.continueShoppingButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await UserHomePage.addToCartOnesietButtonClick();
    });

    it ('checkout', async () =>{
        await UserHomePage.addToCartButtonShoppingClick();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect (UserHomePage.cartDescribeList).toBeDisplayed();
        await UserHomePage.checkoutButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await expect (UserHomePage.tittleCheckout).toBeDisplayed();
        await UserHomePage.continueButtonClick();
        await expect (UserHomePage.alertErrorCheckout).toBeDisplayed();
        await UserHomePage.alertErrorCheckoutButtonClick();
        await expect (UserHomePage.inputFirstName).toBeDisplayed();
        await expect (UserHomePage.inputLastName).toBeDisplayed();
        await expect (UserHomePage.inputpostalCode).toBeDisplayed();
        await UserHomePage.checkoutForm("Victoria", "Ramirez", "2000");
        await UserHomePage.continueButtonClick();
    });

    it ('finish checkout', async () =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        await expect (UserHomePage.overviewTittle).toBeDisplayed();
        await expect (UserHomePage.containDescription).toBeDisplayed();
        await expect (UserHomePage.summaryCheckout).toBeDisplayed();
        await UserHomePage.finishButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await expect (UserHomePage.finishtext).toBeDisplayed();
        await UserHomePage.backButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        const footer = await $('#page_wrapper > footer');
        await footer.scrollIntoView();
    });

    it('navigate another window', async () =>{
        await UserHomePage.twitterButtonClick();
        await browser.newWindow('https://twitter.com/saucelabs');
        await browser.closeWindow();
    });
});
