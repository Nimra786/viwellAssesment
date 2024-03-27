import LoginPage from '../e2e/integration/pages/loginPage';
import MenuPage from '../e2e/integration/pages/menuPage';

const baseUrl = Cypress.config('baseUrl');

Cypress.Commands.add('login', () => {
  // actions
  cy.visit(baseUrl);   
  cy.get(MenuPage.icnLogout).click();

  // assertions
  cy.url().should('eq',baseUrl + 'login');

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