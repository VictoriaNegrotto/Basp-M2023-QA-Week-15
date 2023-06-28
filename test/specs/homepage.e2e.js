import LoginPage from "../pageobjects/loginpage.js";
import UserHomePage from "../pageobjects/homePageUser.js";
import LogoutUser from "../pageobjects/logoutUser.js";

describe('go to login user', () =>{
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

    it('home page user', async () =>{
        await expect (UserHomePage.productsText).toBeDisplayed();
        await expect (UserHomePage.buttonBurguer).toBeDisplayed();
        await expect (UserHomePage.containerInventory).toBeDisplayed();
        await expect (UserHomePage.productImage).toBeDisplayed();
    });

    it ('navigate in home page', async () => {
        await UserHomePage.productImageClick();
        await UserHomePage.addButtonClick();
        await UserHomePage.removeButtonClick();
        await UserHomePage.backProductsButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await UserHomePage.sortButtonClick();
        await UserHomePage.sortButton2Click();
    });

    it('shopping user', async () =>{
        await expect(UserHomePage.productImage).toBeDisplayed();
        await UserHomePage.productImageClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        await UserHomePage.addButtonClick();
        await UserHomePage.addToCartButtonShoppingClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(UserHomePage.containDescription).toBeDisplayed();
        await UserHomePage.checkoutButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    });

    it('checkout user', async () =>{
        await expect (UserHomePage.tittleCheckout).toBeDisplayed();
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
    });

    it ('back home', async () =>{
        await UserHomePage.backButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it ('logout of user', async () =>{
        await LogoutUser.buttonBurguerClick();
        await LogoutUser.logOutButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });
});