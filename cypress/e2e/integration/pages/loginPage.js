class LoginPage {
    btnLogin = 'button[data-qa="login-button"]';
    
    errMessage = 'p';

    inpEmail = 'input[name="email"][type="email"]';
    inpPassword = 'input[type="password"]';

    lblTitle = '[class="login-form"] >h2';
  }
  export default new LoginPage();