declare namespace Cypress {
    interface Chainable {
        clickOnTheLoginButton(): void;
        clickOnTheRegisterButton(): void;
        clickOnLanguageDropdown(): void;
        clickOnInternalLoginButton(): void;
        clickOnUserLoginButton(): void;
        clickOnSingInButton(): void;
        registerButtonIsDisabled(): void;
        clickOnProducts(): void;
        clickOnSolutions(): void;
        clickOnService(): void;
        clickOnJobs(): void;
        clickOnAboutGudel(): void;
        clickOnAccordion(): void;
        clickOnImprint(): void;
        clickOnTermsOfUse(): void;
        clickOnPrivacyPolicy(): void;
    }
}
Cypress.Commands.add('clickOnTheLoginButton', () => {
    cy.get('.app-bar button').contains('Login').click();
});

Cypress.Commands.add('clickOnTheRegisterButton', () => {
    cy.get('.app-bar button').contains('Register').click();
});

Cypress.Commands.add('clickOnLanguageDropdown', () => {
    cy.get('.bi-globe').click();
});

Cypress.Commands.add('clickOnInternalLoginButton', () => {
    cy.get('.form .divider + button').invoke('removeAttr', 'target').click();
});

Cypress.Commands.add('clickOnUserLoginButton', () => {
    cy.get('.form .btn-primary').click();
});

Cypress.Commands.add('clickOnSingInButton', () => {
    cy.get('button#next').click();
});

Cypress.Commands.add('registerButtonIsDisabled', () => {
    cy.get('button.btn.btn-primary').should('be.disabled');
});

Cypress.Commands.add('clickOnProducts', () => {
    cy.get('.col-auto > :nth-child(1) > a').invoke('removeAttr', 'target').click();
});

Cypress.Commands.add('clickOnSolutions', () => {
    cy.get('.col-auto > :nth-child(2) > a').invoke('removeAttr', 'target').click();
});

Cypress.Commands.add('clickOnService', () => {
    cy.get('.col-auto > :nth-child(3) > a').invoke('removeAttr', 'target').click();
});

Cypress.Commands.add('clickOnJobs', () => {
    cy.get('.col-auto > :nth-child(4) > a').invoke('removeAttr', 'target').click();
});

Cypress.Commands.add('clickOnAboutGudel', () => {
    cy.get('.col-auto > :nth-child(5) > a').invoke('removeAttr', 'target').click();
});

Cypress.Commands.add('clickOnAccordion', () => {
    cy.get('#ngb-panel-0-header > .btn').click();
});

Cypress.Commands.add('clickOnImprint', () => {
    cy.get('.align-self-end > :nth-child(1) > a').invoke('removeAttr', 'target').click();
});

Cypress.Commands.add('clickOnTermsOfUse', () => {
    cy.get('.align-self-end > :nth-child(2) > a').invoke('removeAttr', 'target').click();
});

Cypress.Commands.add('clickOnPrivacyPolicy', () => {
    cy.get('.align-self-end > :nth-child(3) > a').invoke('removeAttr', 'target').click();
});
