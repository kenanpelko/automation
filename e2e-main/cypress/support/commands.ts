declare namespace Cypress {
    interface Chainable {
        verifyURLContains(url: string): void;
        login(email: string, password: string);
        verifyContainerIsCentered(selector: string);
        setLoginCookie(key: string, cookie: string);
        verifyAccordionIsExpanded(expanded: string);
        verifyErrorPageIsOpened(): void;
    }
}

Cypress.Commands.add('verifyURLContains', (url: string) => {
    cy.url().should('contain', url);
});

Cypress.Commands.add('login', (email: string, password: string) => {
    cy.get('input#email').type(email);
    cy.get('input#password').type(password);
    cy.clickOnSingInButton();
});

Cypress.Commands.add('verifyContainerIsCentered', (selector: string) => {
    cy.get(selector).parent().should('have.css', 'align-items', 'center');
});

Cypress.Commands.add('verifyAccordionIsExpanded', (expanded) => {
    cy.get('#ngb-panel-0-header > .btn').should('have.attr', 'aria-expanded', expanded);
});

Cypress.Commands.add('verifyErrorPageIsOpened', () => {
    cy.get('.section-headline > h1').should('have.text', 'SITE Not Found');
    cy.get('.pimcore_area_snippet > .wow .section-headline > h3').should('have.text', 'Error 404');
});
