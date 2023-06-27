import LoginPage from "../pageobjects/loginpage.js";
import UserHomePage from "../pageobjects/homePageUser.js";
import LogoutUser from "../pageobjects/logoutUser.js";

describe ('go to login user', () =>{
    beforeAll('open browser',() =>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('problems to login', async () => {
        await expect (LoginPage.loginButton).toBeDisplayed();
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginform("problem_user", "secret_sauce");
        await LoginPage.loginButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (LoginPage.errorImage).toBeDisplayed();
        await UserHomePage.buttonBurguerClick();
        await UserHomePage.aboutButtonClick();
        await browser.newWindow('https://saucelabs.com/');
        await browser.closeWindow();
    });

    it ('try to login again', async ()=>{
        await browser.reloadSession();
        await browser.url("https://www.saucedemo.com/");
        await expect (LoginPage.loginButton).toBeDisplayed();
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginform("standard_user", "secret_sauce");
        await LoginPage.loginButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (UserHomePage.productsText).toBeDisplayed();
        await expect (UserHomePage.buttonBurguer).toBeDisplayed();
        await expect (UserHomePage.containerInventory).toBeDisplayed();
        await UserHomePage.sortButtonClick();
        await UserHomePage.sortButton3Click();
    });

    it ('error', async () =>{
        await browser.setTimeout({'pageLoad': 10000});
        await browser.url("https://www.saucedemo.com/");
        await expect (UserHomePage.alertErrorLogOut).toBeDisplayed();
        await expect (LoginPage.loginButton).toBeDisplayed();
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginform("standard_user", "secret_sauce");
        await LoginPage.loginButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await UserHomePage.sortButtonClick();
        await UserHomePage.sortButton3Click();
        await UserHomePage.addToCartBikeButtonClick();
        await UserHomePage.removeBikeButtonClick();
        await UserHomePage.buttonBurguerClick();
        await UserHomePage.allItemsButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    // it('logout', async () =>{

    // });

});
