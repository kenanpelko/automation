export class LoginPage {
    getUserLoginButton() {
        return cy.get('.form button:nth-child(1)');
    }

    getInternalLoginButton() {
        return cy.get('.form .divider + button');
    }

    getGudelLogo() {
        return cy.get('app-login img[src="/assets/logo-icon.svg"]');
    }

    getLoginTab() {
        return cy.get('.tabs div:nth-child(1)');
    }

    getRegisterTab() {
        return cy.get('.tabs div:nth-child(2)');
    }

    verifyLoginPageElemenets() {
        this.getGudelLogo().should('be.visible');
        this.getUserLoginButton().should('be.visible');
        this.getInternalLoginButton().should('be.visible');

        this, this.getLoginTab().should('be.visible').and('have.class', 'active');
        this, this.getRegisterTab().should('be.visible');
    }
}
