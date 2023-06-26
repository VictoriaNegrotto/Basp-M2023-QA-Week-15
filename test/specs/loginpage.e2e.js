import LoginPage from "../pageobjects/loginpage.js";
import UserHomePage from "../pageobjects/homePageUser.js";
import LogoutUser from "../pageobjects/logoutUser.js";

describe ('go to login user', () =>{
    beforeAll('open browser',() =>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");
    });

    it ('verify login process block', async() =>{
        await LoginPage.loginButtonClick();
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginform("locked_out_user", "secret_sauce");
        await LoginPage.loginButtonClick();
        await LoginPage.alertBlockClick();
    });

    it ('verify login problem process', async() =>{
        await expect (LoginPage.loginButton).toBeDisplayed();
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginform("problem_user", "secret_sauce");
        await LoginPage.loginButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (LoginPage.errorImage).toBeDisplayed();
        await LogoutUser.buttonBurguerClick();
        await LogoutUser.logOutButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    });

    it ('wrong password of login process', async() =>{
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await expect (LoginPage.passwordInput).toBeDisplayed();
        await LoginPage.loginform("standard_user", "secret_sauc");
        await expect (LoginPage.errorAlert).toBeDisplayed();
        await LoginPage.loginButtonClick();
    });

    it ('verify login performance process', async() =>{
        await expect (LoginPage.loginButton).toBeDisplayed();
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.loginform("performance_glitch_user", "secret_sauce");
        await LoginPage.loginButtonClick();
        browser.pause(2000);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

        it ('logout finish flow', async() =>{
        await UserHomePage.productImageClick();
        await UserHomePage.addButtonClick();
        await UserHomePage.removeButtonClick();
        await LogoutUser.buttonBurguerClick();
        await LogoutUser.logOutButtonClick();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });

    it ('succes process', async() =>{
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await expect (LoginPage.passwordInput).toBeDisplayed();
        await LoginPage.loginform("standard_user", "secret_sauce");
        await LoginPage.loginButtonClick();
    });

    it ('navbar user', async () =>{
        await expect (UserHomePage.productsText).toBeDisplayed();
        await expect (UserHomePage.buttonBurguer).toBeDisplayed();
        await LogoutUser.buttonBurguerClick();
        await UserHomePage.addButtonClick();
        await expect (UserHomePage.containerInventory).toBeDisplayed();
    });

    it ('go to footer', async () =>{
        await expect (LoginPage.footerContain).toBeDisplayed();
        await LoginPage.footerFbButtonClick();
        await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
    });
});

