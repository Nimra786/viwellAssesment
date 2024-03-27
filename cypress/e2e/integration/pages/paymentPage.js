class PaymentPage {
    btnPayAndConfirmOrder = '[id="submit"]';
    
    inpCardNumber = '[name="card_number"]';  
    inpCVC = '[name="cvc"]';  
    inpExpirationMonth = '[name="expiry_month"]'; 
    inpExpirationYear = '[name="expiry_year"]';   
    inpNameOnCard = '[name="name_on_card"]'; 

    lblCardNumber = 'div:nth-child(3) > div > label';  
    lblCVC = 'div.col-sm-4.form-group.cvc > label';  
    lblExpiration = 'div:nth-child(2) > label';  
    lblNameOnCard = 'div:nth-child(2) > div > label';  
    lblTitle = '#cart_items > div > div.step-one > h2';

}
  export default new PaymentPage();