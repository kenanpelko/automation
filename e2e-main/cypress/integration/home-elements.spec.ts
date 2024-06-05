import { qase } from 'cypress-qase-reporter/dist/mocha';
import { HomePage } from '../pages/home.po';

const home = new HomePage();

describe('Elements', () => {
    beforeEach(() => {
        cy.visit('/');
        // This will be deleted once Login issue is fixed
        cy.setCookie('__session_key', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJc0FwaVRva2VuIjoiRmFsc2UiLCJJZCI6ImMyNDVjMWRmLTZmZDMtNGYyOS1iODI5LTI5ZDM1MzBiODE1ZCIsIklkcFRlbmFudElkIjoiOThmZmQ5MTQtYjg4Zi00MjgzLThiMjUtNmEyMWU1NjM1M2NiIiwibmJmIjoxNjQ4MTYwODA2LCJleHAiOjE2NDg3NjU2MDYsImlhdCI6MTY0ODE2MDgwNn0.4LtlmKbRNSX_dZsm4dAGHi9l2kCybZkp571LUw9UOh4');
        cy.reload().wait(2000);
    });

    qase(
        1,
        it('The home page is opened after clicking on the "Logo"', () => {
            cy.get('.title').parent().should('have.attr', 'href', '/');
            home.verifyMyGudelApps();
            home.verifySidebarApps();
        })
    );

    qase(
        2,
        it('An empty page appears after adding a fake path to the URL domain', () => {
            cy.url()
                .then((urlValue) => cy.visit(urlValue + 'invalidUrlDomain'))
                .wait(2000);
            cy.get('app-app-section > .text-center').should('not.exist');
            cy.get('.cockpit > :nth-child(1) > .col').should('not.exist');
        })
    );

    qase(
        3,
        it('The "Güdel Apps" appear in the "Apps" section as links in the middle of the home page', () => {
            home.verifyMyGudelApps();
        })
    );

    qase(
        4,
        it('The "Güdel Apps" appear in the sidebar as links', () => {
            home.verifySidebarApps();
        })
    );

    qase(
        5,
        it('The "Güdel App" page is opened after clicking on one of the apps from the sidebar', () => {
            home.getSidebarGAdjuster().click().wait(2000);
            cy.verifyURLContains('gadjuster');
        })
    );

    qase(
        6,
        it('The "Güdel App" page is opened after clicking on one of the apps from the middle of the home page', () => {
            home.getAppsGAdjuster().click().wait(2000);
            cy.verifyURLContains('gadjuster');
        })
    );

    qase(
        7,
        it('The "Accordion" item is collapsed after clicking on its header', () => {
            cy.verifyAccordionIsExpanded('true');
            cy.clickOnAccordion();
            cy.verifyAccordionIsExpanded('false');
        })
    );

    qase(
        8,
        it('The "Accordion" item is expanded after clicking on its header', () => {
            cy.clickOnAccordion();
            cy.verifyAccordionIsExpanded('false');
            cy.clickOnAccordion();
            cy.verifyAccordionIsExpanded('true');
        })
    );

    qase(
        9,
        it('The "jobs apprenticeship" page is opened after clicking on the "JOBS" link from the footer', () => {
            cy.clickOnJobs();
            cy.get('.caption').should('have.text', 'Jobs & Apprenticeship');
            cy.verifyURLContains('/jobs-apprenticeship');
        })
    );

    qase(
        10,
        it('The "jobs apprenticeship" page is opened with wrong URL after clicking on the "JOBS" link from the footer', () => {
            cy.clickOnJobs();
            cy.verifyURLContains('/about-guedel/jobs-apprenticeship');
        })
    );

    qase(
        11,
        it('The "about gudel" page is opened after clicking on the "ABOUT GÜDEL" link from the footer', () => {
            cy.clickOnAboutGudel();
            cy.get('#topnav-dropdown-button-26').should('contain', 'About Güdel').and('have.css', 'color', 'rgb(153, 0, 0)');
            cy.verifyURLContains('/about-guedel/gudel-group');
        })
    );

    qase(
        12,
        it('The "about gudel" page is opened with wrong URL after clicking on the "ABOUT GÜDEL" link from the footer', () => {
            cy.clickOnAboutGudel();
            cy.verifyURLContains('/about-guedel/gudel-group');
        })
    );

    qase(
        13,
        it('The "Services" page is opened after clicking on the "Services" link from the footer', () => {
            cy.clickOnService();
            cy.get('#topnav-dropdown-button-19').should('contain', 'Service').and('have.css', 'color', 'rgb(153, 0, 0)');
            cy.verifyURLContains('/services/prime-care');
        })
    );

    qase(
        26,
        it('"404" page is opened after clicking on the "PRODUCTS" or "SOLUTIONS" links from the footer', () => {
            cy.clickOnProducts();
            cy.verifyURLContains('linearaxisn');
            cy.verifyErrorPageIsOpened();
            cy.go('back').wait(2000);
            cy.clickOnSolutions();
            cy.verifyURLContains('Solutions');
            cy.verifyErrorPageIsOpened();
        })
    );

    qase(
        27,
        it('The "Legal Disclaimer" page is opened after clicking on the "IMPRINT" link from the footer', () => {
            cy.clickOnImprint();
            cy.verifyURLContains('legaldisclaimer');
            cy.get('.section-headline > h1').should('have.text', 'Legal Disclaimer');
        })
    );

    qase(
        28,
        it('The "Terms of Use" page is opened after clicking on the "TERMS OF USE" link from the footer', () => {
            cy.clickOnTermsOfUse();
            cy.verifyURLContains('termsofuse');
            cy.get('.section-headline > h1').should('have.text', 'Terms of Use');
        })
    );

    qase(
        29,
        it('The "Privacy Policy" page is opened after clicking on the "PRIVACY POLICY" link from the footer', () => {
            cy.clickOnPrivacyPolicy();
            cy.verifyURLContains('privacy-policy');
            cy.get('.section-headline > h1').should('have.text', 'Privacy Policy');
        })
    );

    qase(
        30,
        it('The "Send" button should be disabled in the "Contact us" container while the input fields are empty', () => {
            home.getContactFirstNameField().should('not.have.value');
            home.getContactLastNameField().should('not.have.value');
            home.getContactEmailField().should('not.have.value');
            home.getContactCompanyField().should('not.have.value');
            cy.get('.contact-section button.btn-primary').should('be.disabled');
        })
    );

    qase(
        31,
        it('The "Contact us" container appears in the home page', () => {
            cy.get('div.contact-section').scrollIntoView().should('be.visible');
            home.verifyContactElements();
        })
    );

    // THIS CASE IS COMMENTED BECAUSE SEND BUTTON IS NOT FUNCTIONAL, THEREFORE MESSAGE CAN'T BE DISPLAYED
    // qase(
    //     32,
    //     it('A user message should appear under the "Email" input field after filling it with a non-email format', () => {
    //         home.getContactFirstNameField().type('Kenan');
    //         home.getContactLastNameField().type('Pelko');
    //         home.getContactEmailField().type('invalidEmailAddress');
    //         home.getContactCompanyField().type('Gudel');
    //         cy.get('.contact-section button.btn-primary').click();
    //         cy.get
    //     })
    // );
});
