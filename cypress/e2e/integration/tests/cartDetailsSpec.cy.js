import CategoryPage from '../pages/categoryPage';
import CartModelPage from '../pages/cartModelPage';
import CartDetailsPage from '../pages/cartDetailsPage';
import MenuPage from '../pages/menuPage';
import ProductPage from '../pages/productPage';
import '../../../support/commands';


describe('Cart Test', () => {
  const baseUrl = Cypress.config('baseUrl');
  
  beforeEach(() => {
    cy.login();
});

  it('Automate adding products to the cart and verify successful addition.', () => {
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

    // teardown
    CartDetailsPage.deleteItemFromTable('Sleeves Printed Top - White');
    CartDetailsPage.deleteItemFromTable('Sleeveless Dress');
    CartDetailsPage.deleteItemFromTable('Soft Stretch Jeans');
    CartDetailsPage.checkRowCount(0);
  });

  it('Test the removal of items from the cart and verify the updated cart contents.', () => {
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

    // actions
    CartDetailsPage.deleteItemFromTable('Sleeves Printed Top - White');
    
    // assertions
    CartDetailsPage.checkItemNotPresence('Sleeves Printed Top - White');
    CartDetailsPage.checkRowCount(2);

    // teardown
    CartDetailsPage.deleteItemFromTable('Sleeveless Dress');
    CartDetailsPage.deleteItemFromTable('Soft Stretch Jeans');
    CartDetailsPage.checkRowCount(0);
  });
});