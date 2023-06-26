import loginPage from "../pageobjects/loginpage.js";
import userHomePage from "../pageobjects/homePageUser.js";
import logoutUser from "../pageobjects/logoutUser.js";

describe('go to login user', () =>{
    beforeAll('open browser', () =>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('succes process', async() =>{
        await expect (loginPage.loginButton).toBeDisplayed();
        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.loginform("standard_user", "secret_sauce");
        await loginPage.loginButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('home page explore', async () =>{
        await expect (userHomePage.productsText).toBeDisplayed();
        await expect (userHomePage.buttonBurguer).toBeDisplayed();
        await expect (userHomePage.containerInventory).toBeDisplayed();
        await userHomePage.productImageClick();
        await userHomePage.backProductsButtonClick();
        await userHomePage.buttonBurguerClick();
        await userHomePage.aboutButtonClick();
        await browser.newWindow('https://saucelabs.com/');
        await browser.switchToWindow("https://www.saucedemo.com/");
    });

    it('navigate and shopping', async () =>{
        await userHomePage.productImage2Click();
        await expect (userHomePage.productTshirt).toBeDisplayed();
        await userHomePage.addToCartButtonTshirtClick();
        await userHomePage.addToCartButtonShoppingClick();
        await expect (userHomePage.cartDescribeTshirt).toBeDisplayed();
        await userHomePage.continueShoppingButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (userHomePage.scrollFooter).toBeDisplayed({ scrollIntoView: true });
        await expect (userHomePage.scrollFooter).toBeDisplayed();
    });

});
