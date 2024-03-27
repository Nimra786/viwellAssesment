import CategoryPage from '../pages/categoryPage';
import CartModelPage from '../pages/cartModelPage';
import CartDetailsPage from '../pages/cartDetailsPage';
import CheckoutPage from '../pages/checkoutPage';
import { faker } from '@faker-js/faker';
import MenuPage from '../pages/menuPage';
import ProductPage from '../pages/productPage';
import PaymentPage from '../pages/paymentPage';
import OrderConfirmationPage from '../pages/orderConfirmationPage';

import '../../../support/commands';


describe('Checkout Test', () => {
const baseUrl = Cypress.config('baseUrl');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const cardNumber = faker.finance.creditCardNumber(); 
const cvc = faker.finance.creditCardCVV();
const expirationMonth = faker.date.future().getMonth() + 1; 
const expirationYear = faker.date.future().getFullYear();
const nameOnCard = `${firstName} ${lastName}`;

beforeEach(() => {
    cy.login();
});

  it('Automate the checkout process, including filling in shipping details, selecting payment methods, and completing the purchase.', () => {
    // actions
    cy.get(CategoryPage.lblCategoryWomen).click();
    cy.get(CategoryPage.lblSCWomenDresses).click();

    // assertions
    cy.url().should('eq',baseUrl + 'category_products/1');
    cy.get(ProductPage.productColumns).should('be.visible');
    cy.get(ProductPage.lblProduct1Name).should('have.text','Sleeveless Dress');
    cy.get(ProductPage.lblProduct1Price).should('have.text','Rs. 1000');
    cy.get(ProductPage.btnAddToCart).should('be.visible');

    // actions
    cy.get(ProductPage.btnAddToCart).first().click();

    // assertions
    cy.get(CartModelPage.cartModel).should('be.visible',{ timeout: 10000 });
    cy.get(CartModelPage.lblAdded).should('have.text','Added!');
    cy.get(CartModelPage.lnkCart).should('be.visible');

    // actions
    cy.get(CartModelPage.lnkCart).click();
    
    // assertions
    cy.url().should('eq', baseUrl + 'view_cart');
    cy.get(CartDetailsPage.btnProceedToCheckout).should('be.visible');
    cy.get(CartDetailsPage.lblCartItemDescTitle).eq(0).should('have.text','Sleeveless Dress')
    cy.get(CartDetailsPage.lblCartItemDescSubcategory).eq(0).should('have.text','Women > Dress')
    cy.get(CartDetailsPage.lblCartItemPrice).eq(0).contains('Rs. 1000');
    CartDetailsPage.checkRowCount(1);
    CartDetailsPage.checkItemPresence('Sleeveless Dress');

    // actions
    cy.get(MenuPage.icnProduct).click();
    
    // assertions
    cy.url().should('eq', baseUrl + 'products');
    cy.get(CategoryPage.lblCategoryMen).click();
    cy.get(CategoryPage.lblSCMenJeans).click();

    // assertions
    cy.url().should('eq',baseUrl + 'category_products/6');
    cy.get(ProductPage.productColumns).should('be.visible');
    cy.get(ProductPage.lblProduct1Name).should('have.text','Soft Stretch Jeans');
    cy.get(ProductPage.lblProduct1Price).should('have.text','Rs. 799');
    cy.get(ProductPage.btnAddToCart).should('be.visible');

    // actions
    cy.get(ProductPage.btnAddToCart).first().click();

    // assertions
    cy.get(CartModelPage.cartModel).should('be.visible');
    cy.get(CartModelPage.lblAdded).should('have.text','Added!');
    cy.get(CartModelPage.lnkCart).should('be.visible');

    // actions
    cy.get(CartModelPage.lnkCart).click();
    
    // assertions
    cy.url().should('eq', baseUrl + 'view_cart');
    cy.get(CartDetailsPage.btnProceedToCheckout).should('be.visible');
    cy.get(CartDetailsPage.lblCartItemDescTitle).eq(1).should('have.text','Soft Stretch Jeans')
    cy.get(CartDetailsPage.lblCartItemDescSubcategory).eq(1).should('have.text','Men > Jeans')
    CartDetailsPage.checkRowCount(2);
    CartDetailsPage.checkItemPresence('Soft Stretch Jeans');

    // actions
    cy.get(MenuPage.icnProduct).click();
    
    // assertions
    cy.url().should('eq', baseUrl + 'products');
 
    // actions
    cy.get(CategoryPage.lblCategoryKids).click();
    cy.get(CategoryPage.lblSCKidsTshirtsAndJeans).click();

    // assertions
    cy.url().should('eq',baseUrl + 'category_products/5');
    cy.get(ProductPage.productColumns).should('be.visible');
    cy.get(ProductPage.lblProduct1Name).should('have.text','Sleeves Printed Top - White');
    cy.get(ProductPage.lblProduct1Price).should('have.text','Rs. 499');
    cy.get(ProductPage.btnAddToCart).should('be.visible');

    // actions
    cy.get(ProductPage.btnAddToCart).first().click();

    // assertions
    cy.get(CartModelPage.cartModel).should('be.visible');
    cy.get(CartModelPage.lblAdded).should('have.text','Added!');
    cy.get(CartModelPage.lnkCart).should('be.visible');

    // actions
    cy.get(CartModelPage.lnkCart).click();

    // assertions
    cy.url().should('eq', baseUrl + 'view_cart');
    cy.get(CartDetailsPage.btnProceedToCheckout).should('be.visible');
    cy.get(CartDetailsPage.lblCartItemDescTitle).eq(2).should('have.text','Sleeves Printed Top - White')
    cy.get(CartDetailsPage.lblCartItemDescSubcategory).eq(2).should('have.text','Kids > Tops & Shirts')
    CartDetailsPage.checkRowCount(3);
    CartDetailsPage.checkItemPresence('Sleeves Printed Top - White');

    // actions
    cy.get(CartDetailsPage.btnProceedToCheckout).click();

    // assertions
    cy.url().should('eq', baseUrl + 'checkout');
    cy.get(CheckoutPage.lblAddressDetails).should('be.visible');
    cy.get(CheckoutPage.lblDAAddress).should('be.visible');
    cy.get(CheckoutPage.lblBAAddress).should('be.visible');

    cy.get(CheckoutPage.lblDAFullName).should('have.text','Mrs. Nimra Batool');
    cy.get(CheckoutPage.lblDAAddress).should('have.text','Lahore, Pakistan');
    cy.get(CheckoutPage.lblDACountryName).should('have.text','Singapore');
    cy.get(CheckoutPage.lblDAMobileName).should('have.text','+923167100152');

    cy.get(CheckoutPage.lblBAFullName).should('have.text','Mrs. Nimra Batool');
    cy.get(CheckoutPage.lblBAAddress).should('have.text','Lahore, Pakistan');
    cy.get(CheckoutPage.lblBACountryName).should('have.text','Singapore');
    cy.get(CheckoutPage.lblBAMobileName).should('have.text','+923167100152');

    CheckoutPage.checkItemPresence('Sleeveless Dress');
    CheckoutPage.checkItemPresence('Soft Stretch Jeans');
    CheckoutPage.checkItemPresence('Sleeves Printed Top - White');
    CheckoutPage.checkRowCount(4);
    cy.get(CheckoutPage.lblTotalPrice).contains('Rs. 2298');

    // teardown
    cy.get(MenuPage.icnCart).click()
    CartDetailsPage.deleteItemFromTable('Sleeves Printed Top - White');
    CartDetailsPage.deleteItemFromTable('Sleeveless Dress');
    CartDetailsPage.deleteItemFromTable('Soft Stretch Jeans');
    CartDetailsPage.checkRowCount(0);
  });

  it('Verify the successful completion of the order and receipt generation.', () => {
    // actions
    cy.get(CategoryPage.lblCategoryWomen).click();
    cy.get(CategoryPage.lblSCWomenDresses).click();
    cy.get(ProductPage.btnAddToCart).first().click();

    // assertions
    cy.get(CartModelPage.cartModel).should('be.visible',{ timeout: 10000 });
    cy.get(CartModelPage.lblAdded).should('have.text','Added!');
    cy.get(CartModelPage.lnkCart).should('be.visible');

    // actions
    cy.get(CartModelPage.lnkCart).click();
    
    // assertions
    cy.url().should('eq', baseUrl + 'view_cart');
    CartDetailsPage.checkRowCount(1);
    CartDetailsPage.checkItemPresence('Sleeveless Dress');

    // actions
    cy.get(CartDetailsPage.btnProceedToCheckout).click();

    // assertions
    cy.url().should('eq', baseUrl + 'checkout');
    cy.get(CheckoutPage.lblAddressDetails).should('be.visible');
    cy.get(CheckoutPage.lblDAAddress).should('be.visible');
    cy.get(CheckoutPage.lblBAAddress).should('be.visible');

    cy.get(CheckoutPage.lblDAFullName).should('have.text','Mrs. Nimra Batool');
    cy.get(CheckoutPage.lblDAAddress).should('have.text','Lahore, Pakistan');
    cy.get(CheckoutPage.lblDACountryName).should('have.text','Singapore');
    cy.get(CheckoutPage.lblDAMobileName).should('have.text','+923167100152');

    cy.get(CheckoutPage.lblBAFullName).should('have.text','Mrs. Nimra Batool');
    cy.get(CheckoutPage.lblBAAddress).should('have.text','Lahore, Pakistan');
    cy.get(CheckoutPage.lblBACountryName).should('have.text','Singapore');
    cy.get(CheckoutPage.lblBAMobileName).should('have.text','+923167100152');

    CheckoutPage.checkItemPresence('Sleeveless Dress');
    CheckoutPage.checkRowCount(2);
    cy.get(CheckoutPage.lblTotalPrice).contains('Rs. 1000')

    // actions
    cy.get(CheckoutPage.btnPlaceOrder).click();

    // assertions
    cy.url().should('eq', baseUrl + 'payment');
    cy.get(PaymentPage.lblTitle).should('have.text','Payment');

    // actions
    cy.get(PaymentPage.inpCardNumber).type(cardNumber);
    cy.get(PaymentPage.inpNameOnCard).type(nameOnCard);
    cy.get(PaymentPage.inpCVC).type(cvc);
    cy.get(PaymentPage.inpExpirationMonth).type(expirationMonth);
    cy.get(PaymentPage.inpExpirationYear).type(expirationYear);

    cy.get(PaymentPage.btnPayAndConfirmOrder).click();

    // assertions
    cy.url().should(url => {
        const parts = url.split('/');
        const urlWithoutLastPart = parts.slice(0, -1).join('/');
        expect(urlWithoutLastPart).to.equal(baseUrl + 'payment_done');
      });
    cy.get(OrderConfirmationPage.lblTitleOrderPlace).should('have.text','Order Placed!');
    cy.get(OrderConfirmationPage.lblCongratulationText).should('have.text','Congratulations! Your order has been confirmed!');
    cy.get(OrderConfirmationPage.btnDownloadInvoice).should('be.visible');
    cy.get(OrderConfirmationPage.btnContinue).should('be.visible');
  });
});