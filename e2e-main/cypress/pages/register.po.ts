export class RegisterPage {
    getFirstNameField() {
        return cy.get('#firstName');
    }

    getLastNameField() {
        return cy.get('#lastName');
    }

    getEmailField() {
        return cy.get('#email');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getConfirmPassword() {
        return cy.get('#confirmPassword');
    }
    getCheckboxTerms() {
        return cy.get('.checkbox-tick');
    }

    verifyRegisterPageElements() {
        this.getFirstNameField().should('be.visible');
        this.getLastNameField().should('be.visible');
        this.getEmailField().should('be.visible');
        this.getPasswordField().should('be.visible');
        this.getConfirmPassword().should('be.visible');
        this.getCheckboxTerms().should('be.visible');
    }

    selectDropdown(option) {
        cy.get('.dropdown .dropdown-toggle > span').click();
        cy.get('.dropdown-menu.show').contains(option).click();
    }
}
