class CheckoutPage {    

    btnPlaceOrder = '[class="btn btn-default check_out"]'; 

    lblAddressDetails = 'div:nth-child(2) > h2'; 

    lblDeliveryAddressTitle = ' #address_delivery > li.address_title > h3'; 
    lblDAFullName = '#address_delivery > li.address_firstname.address_lastname'; 
    lblDAAddress = '#address_delivery > li:nth-child(4)'; 
    lblDAPostCode = '#address_delivery > li.address_city.address_state_name.address_postcode'; 
    lblDACountryName = '#address_delivery > li.address_country_name'; 
    lblDAMobileName = '#address_delivery > li.address_phone'; 

    lblBillingAddressTitle = ' #address_invoice > li.address_title > h3'; 
    lblBAFullName = '#address_invoice > li.address_firstname.address_lastname'; 
    lblBAAddress = '#address_invoice > li:nth-child(4)'; 
    lblBAPostCode = '#address_invoice > li.address_city.address_state_name.address_postcode'; 
    lblBACountryName = '#address_invoice > li.address_country_name'; 
    lblBAMobileName = '#address_invoice > li.address_phone'; 

    lblReviewYourOrder = '#cart_items > div > div:nth-child(4) > h2'; 

    lblCartItemQuantity = 'td.cart_quantity'
    lblCartItemDescTitle = 'td.cart_description > h4';
    lblCartItemDescSubcategory = 'td.cart_description > p';

    lblCartItemPrice = 'td.cart_price > p';
    lblCartItemTotalPrice = 'td.cart_total > p';

    lblTotalAmount = 'td:nth-child(3) > h4 > b'; 
    lblTotalPrice = 'td:nth-child(4) > p'; 

    inpOrderMessage = '#ordermsg > textarea'; 

    sectionDeliveryAddress = '#address_delivery';
    sectionBillingAddress = '#address_invoice';

    tblCartDetails = '#cart_info > table';

    // methods

    checkItemPresence(productName) {
      cy.get(this.tblCartDetails).within(() => {
        cy.contains('tr',productName).should('exist');
      });
    }

    checkRowCount(itemCount) {
      cy.get(this.tblCartDetails).within(() => {
        cy.get('tbody > tr').its('length').should('be.eq', itemCount);
      });
    }

//     calculateTotalPrice(expectedTotalPrice) {
//     let totalPrice = 0;

//     cy.get('tbody > tr').each((index, row) => {
//     const priceCell = $(row).find('#product-1 > td.cart_total');
//     if (priceCell.length) {
//       const priceText = priceCell.text().trim().replace('Rs. ', '');
//       const price = parseFloat(priceText);
      
//       totalPrice += price;
//     }
//   });
//   expect(totalPrice).to.equal(expectedTotalPrice);
// }
    
  }
  export default new CheckoutPage();