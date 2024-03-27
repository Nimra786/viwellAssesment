import CategoryPage from '../pages/categoryPage';
import CartModelPage from '../pages/cartModelPage';
import CartDetailsPage from '../pages/cartDetailsPage';
import MenuPage from '../pages/menuPage';
import ProductPage from '../pages/productPage';
import '../../../support/commands';


describe('Product Test', () => {
  const baseUrl = Cypress.config('baseUrl');
  
  beforeEach(() => {
    cy.login();
  });

  it('Automate the process of browsing products across different categories.', () => {
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
    cy.get(CartModelPage.btnContinueShopping).should('be.visible');

    // actions
    cy.get(CartModelPage.btnContinueShopping).click();
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
    cy.get(CartModelPage.btnContinueShopping).should('be.visible');

    // actions
    cy.get(CartModelPage.btnContinueShopping).click();
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
    cy.get(CartModelPage.btnContinueShopping).should('be.visible');

    // teardown
    cy.get(CartModelPage.lnkCart).click();
    CartDetailsPage.deleteItemFromTable('Sleeves Printed Top - White');
    CartDetailsPage.deleteItemFromTable('Sleeveless Dress');
    CartDetailsPage.deleteItemFromTable('Soft Stretch Jeans');
    CartDetailsPage.checkRowCount(0);
  });

  it('Verify that the product details are displayed correctly on the product page.', () => {
    // actions
    cy.get(CategoryPage.lblCategoryWomen).click();
    cy.get(CategoryPage.lblSCWomenDresses).click();

    // assertions
    cy.url().should('eq',baseUrl + 'category_products/1');
    cy.get(ProductPage.productColumns).should('be.visible');
    cy.get(ProductPage.lblProduct1Name).should('have.text','Sleeveless Dress');
    cy.get(ProductPage.lblProduct1Price).should('have.text','Rs. 1000');
    cy.get(ProductPage.btnAddToCart).should('be.visible');

    cy.get(ProductPage.productColumns).should('be.visible');
    cy.get(ProductPage.lblProduct2Name).should('have.text','Stylish Dress');
    cy.get(ProductPage.lblProduct2Price).should('have.text','Rs. 1500');
    cy.get(ProductPage.btnAddToCart).should('be.visible');

    cy.get(ProductPage.productColumns).should('be.visible');
    cy.get(ProductPage.lblProduct3Name).should('have.text','Rose Pink Embroidered Maxi Dress');
    cy.get(ProductPage.lblProduct3Price).should('have.text','Rs. 2300');
    cy.get(ProductPage.btnAddToCart).should('be.visible');

  });
});