import LoginPage from '../pages/loginPage.js';
import MenuPage from '../pages/menuPage.js';

describe('Login Test', () => {
  const baseUrl = Cypress.config('baseUrl');
  
  it('Verify Initial Presentation of Login Page', () => {
    // actions
    cy.visit(baseUrl );   
    cy.get(MenuPage.icnLogout).click();

    // assertions
    cy.url().should('eq',baseUrl+'login');
    cy.get(LoginPage.lblTitle).should('be.visible');
    cy.get(LoginPage.lblTitle).should('contain','Login to your account');
    cy.get(LoginPage.inpEmail).should('be.visible');
    cy.get(LoginPage.inpPassword).should('be.visible');
    cy.get(LoginPage.inpEmail).should('have.attr', 'placeholder', 'Email Address');
    cy.get(LoginPage.inpPassword).should('have.attr', 'placeholder', 'Password');
    cy.get(LoginPage.btnLogin).should('be.visible');
});

  it('Verify that a user can successfully log in with valid credentials.', () => {
        // actions
        cy.visit(baseUrl);   
        cy.get(MenuPage.icnLogout).click();

        // assertions
        cy.url().should('eq',baseUrl+'login');
        cy.get(LoginPage.inpEmail).should('be.visible');
        cy.get(LoginPage.inpPassword).should('be.visible');
        cy.get(LoginPage.inpEmail).should('have.attr', 'placeholder', 'Email Address');
        cy.get(LoginPage.inpPassword).should('have.attr', 'placeholder', 'Password');

        cy.get(LoginPage.btnLogin).should('be.visible');
        cy.get(LoginPage.btnLogin).should('have.text', 'Login');

        // actions
        cy.fixture('user').then((users) => {
          const user = users.users[0];
        cy.get(LoginPage.inpEmail).first().type(user.email);
        cy.get(LoginPage.inpPassword).type(user.password);
        cy.get(LoginPage.btnLogin).click();
        });

        // assertions
        cy.url().should('eq',baseUrl);
});

  it('Verify that an error message is displayed for invalid login attempts (e.g., incorrect username/password).', () => {
      // actions
      cy.visit(baseUrl);   
      cy.get(MenuPage.icnLogout).click();

      // assertions
      cy.url().should('eq',baseUrl+'login');
      cy.get(LoginPage.inpEmail).should('be.visible');
      cy.get(LoginPage.inpPassword).should('be.visible');
      cy.get(LoginPage.inpEmail).should('have.attr', 'placeholder', 'Email Address');
      cy.get(LoginPage.inpPassword).should('have.attr', 'placeholder', 'Password');

      cy.get(LoginPage.btnLogin).should('be.visible');
      cy.get(LoginPage.btnLogin).should('have.text', 'Login');

      // actions
      cy.fixture('user').then((users) => {
        const user = users.users[1];
      cy.get(LoginPage.inpEmail).first().type(user.email);
      cy.get(LoginPage.inpPassword).type(user.password);
      cy.get(LoginPage.btnLogin).click();
      });

      // assertions
      cy.get(LoginPage.errMessage).first().should('have.text','Your email or password is incorrect!');
      cy.url().should('eq', baseUrl + 'login');
      
});
});