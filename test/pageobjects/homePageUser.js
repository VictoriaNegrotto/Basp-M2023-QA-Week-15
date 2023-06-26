class UserHomePage {

    async loginform (username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }

    get productsText (){
        return $('#header_container > div.header_secondary_container > span');
    }

    get buttonBurguer (){
        return $('#react-burger-menu-btn');
    }

    get addToCartButtonShopping (){
        return $('#shopping_cart_container > a');

    }

    get containerInventory(){
        return $('#inventory_container');
    }

    get productImage (){
        return $('#item_4_img_link > img');
    }

    get productImageInventory (){
        return $('#inventory_container');
    }

    get backProductsButton (){
        return $('#back-to-products');
    }

    get productImage2 (){
        return $('#item_1_img_link');
    }

    get sortButton (){
        return $('#header_container > div.header_secondary_container > div > span > select');
    }

    get sortButton2 (){
        return $('#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)');
    }

    get addToCartButton (){
        return $('#add-to-cart-sauce-labs-backpack');

    }

    get removeButton (){
        return $('#remove-sauce-labs-backpack');
    }

    get containDescription (){
        return $('#checkout_summary_container > div > div.cart_list > div.cart_item');
    }

    get checkoutButton (){
        return $('#checkout');
    }

    get tittleCheckout (){
        return $('#header_container > div.header_secondary_container > span');
    }

    get inputFirstName (){
        return $('#first-name');
    }

    get inputLastName(){
        return $('#last-name');
    }

    get inputpostalCode(){
        return $('#postal-code');
    }

    get continueButton (){
        return $('#continue');
    }

    get overviewTittle (){
        return $('#header_container > div.header_secondary_container > span');
    }

    get summaryCheckout (){
        return $('#checkout_summary_container');

    }

    get finishButton (){
        return $('#finish');
    }

    get finishtext (){
        return $('#checkout_complete_container > h2');
    }

    get backButton (){
        return $('#back-to-products');
    }

    get aboutButton(){
        return $('#about_sidebar_link');
    }

    get productTshirt(){
        return $('#inventory_item_container');
    }

    get addToCartButtonTshirt(){
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get cartDescribeTshirt(){
        return $('#cart_contents_container > div > div.cart_list > div.cart_item');
    }

    get continueShoppingButton(){
        return $('#continue-shopping');
    }

    get footer(){
        return $('#page_wrapper > footer');
    }

    get addToCartOnesietButton(){
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get cartDescribeList(){
        return $('#cart_contents_container > div > div.cart_list');
    }

    get twitterButton(){
        return $('#page_wrapper > footer > ul > li.social_twitter');
    }

    get SauceDemo(){
        return $('https://www.saucedemo.com/inventory.html');
    }

    get alertErrorCheckout(){
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3');
    }

    get alertErrorCheckoutButton(){
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3 > button');
    }
    async checkoutForm (firstname, lastname, postalcode) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputpostalCode.setValue(postalcode);
    }

    async productImageClick(){
        await this.productImage.click();
    }

    async productImage2Click(){
        await this.productImage2.click();
    }

    async addButtonClick() {
        await this.addToCartButton.click();
    }

    async addToCartButtonShoppingClick (){
        await this.addToCartButtonShopping.click();
    }
    async removeButtonClick(){
        await this.removeButton.click();
    }

    async buttonBurguerClick() {
        await this.buttonBurguer.click();
    }

    async backProductsButtonClick (){
        await this.backProductsButton.click();
    }

    async sortButtonClick() {
        await this.sortButton.click();
    }

    async sortButton2Click(){
        await this.sortButton2.click();
    }

    async checkoutButtonClick() {
        await this.checkoutButton.click();
    }

    async continueButtonClick() {
        await this.continueButton.click();
    }

    async finishButtonClick() {
        await this.finishButton.click();
    }

    async backButtonClick() {
        await this.backButton.click();
    }

    async aboutButtonClick(){
        await this.aboutButton.click();
    }

    async addToCartButtonTshirtClick(){
        await this.addToCartButtonTshirt.click();
    }

    async continueShoppingButtonClick() {
        await this.continueShoppingButton.click();
    }

    async addToCartOnesietButtonClick(){
        await this.addToCartOnesietButton.click();
    }

    async twitterButtonClick(){
        await this.twitterButton.click();
    }

    async alertErrorCheckoutButtonClick(){
        await this.alertErrorCheckoutButton.click();
    }
}

export default new UserHomePage();