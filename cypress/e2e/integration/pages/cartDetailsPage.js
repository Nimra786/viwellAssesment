class CartDetailsPage {
    btnProceedToCheckout = '[class="btn btn-default check_out"]';

    icnCartItemDelete = 'td.cart_delete > a';

    lblCartItemQuantity = 'td.cart_quantity'
    lblCartItemDescTitle = 'td.cart_description > h4';
    lblCartItemDescSubcategory = 'td.cart_description > p';

    lblCartItemPrice = 'td.cart_price > p';
    lblCartItemTotalPrice = 'td.cart_total > p';

    tblCartDetails = '[id="cart_info_table"]';

    // methods  
    checkItemPresence(productName) {
      cy.get(this.tblCartDetails).within(() => {
        cy.contains('tr',productName).should('exist');
      });
    }

    checkItemNotPresence(productName) {
      cy.get(this.tblCartDetails).within(() => {
        cy.contains('tr',productName).should('not.exist');
      });
    }

    checkRowCount(itemCount) {
      cy.get(this.tblCartDetails).within(() => {
        cy.get('tbody > tr').its('length').should('be.eq', itemCount);
      });
    }

    deleteItemFromTable(description) {
      cy.get(this.tblCartDetails).within(() => {
        cy.contains('tr', description).within(() => {
          cy.get('td.cart_delete > a').click();
        });
      });
    }
  }
  export default new CartDetailsPage();