export class HomePage {
    getAppsMyAssets() {
        return cy.get(':nth-child(1) > .img');
    }

    getAppsMySupport() {
        return cy.get(':nth-child(2) > .img');
    }

    getAppsConfigurators() {
        return cy.get(':nth-child(3) > .img');
    }

    getAppsGAdjuster() {
        return cy.get(':nth-child(4) > .img');
    }

    getAppsGSizer() {
        return cy.get(':nth-child(5) > .img');
    }

    getAppsCADModels() {
        return cy.get(':nth-child(6) > .img');
    }

    getAppsGAssistMRO() {
        return cy.get(':nth-child(7) > .img');
    }

    getWelcomeMessage() {
        return cy.get('.cockpit > :nth-child(1) > .col').should('contain', 'Welcome to myGüdel,');
    }

    getSidebarHome() {
        return cy.get('.sidebar > :nth-child(1)');
    }

    getSidebarMyAssets() {
        return cy.get('.sidebar > :nth-child(2)');
    }

    getSidebarMySupport() {
        return cy.get('.sidebar > :nth-child(3)');
    }

    getSidebarConfigurators() {
        return cy.get('.sidebar > :nth-child(4)');
    }

    getSidebarGAdjuster() {
        return cy.get('.sidebar > :nth-child(5)');
    }

    getSidebarGSizer() {
        return cy.get('.sidebar > :nth-child(6)');
    }

    getSidebarCADModels() {
        return cy.get('.sidebar > :nth-child(7)');
    }

    getSidebarGAssistMRO() {
        return cy.get('.sidebar > :nth-child(8)');
    }

    getAccordion() {
        return cy.get('#ngb-panel-0-header > .btn');
    }

    verifyMyGudelApps() {
        this.getAppsMyAssets().should('be.visible');
        this.getAppsMySupport().should('be.visible');
        this.getAppsConfigurators().should('be.visible');
        this.getAppsGAdjuster().should('be.visible');
        this.getAppsGSizer().should('be.visible');
        this.getAppsCADModels().should('be.visible');
        this.getAppsGAssistMRO().should('be.visible');
    }

    verifySidebarApps() {
        this.getSidebarMyAssets().should('be.visible');
        this.getSidebarMySupport().should('be.visible');
        this.getSidebarConfigurators().should('be.visible');
        this.getSidebarGAdjuster().should('be.visible');
        this.getSidebarGSizer().should('be.visible');
        this.getSidebarCADModels().should('be.visible');
        this.getSidebarGAssistMRO().should('be.visible');
    }

    getContactFirstNameField() {
        return cy.get('.contact-section input#first-name.form-control');
    }

    getContactLastNameField() {
        return cy.get('.contact-section input#last-name.form-control');
    }

    getContactEmailField() {
        return cy.get('.contact-section input#email.form-control');
    }

    getContactCompanyField() {
        return cy.get('.contact-section input#company.form-control');
    }

    verifyContactElements() {
        this.getContactFirstNameField().should('be.visible');
        this.getContactLastNameField().should('be.visible');
        this.getContactEmailField().should('be.visible');
        this.getContactCompanyField().should('be.visible');
    }
}
