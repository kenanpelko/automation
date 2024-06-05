import { qase } from 'cypress-qase-reporter/dist/mocha';
import { LoginPage } from '../pages/login.po';
import { RegisterPage } from '../pages/register.po';

const data = require('../fixtures/users.json');
const user = data.login_user;
const login = new LoginPage();
const register = new RegisterPage();

describe('Elements', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    afterEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    qase(
        14,
        it('The login page is opened after clicking on the "Login" button in the app navbar', () => {
            cy.clickOnTheLoginButton();
            cy.verifyURLContains('/login');
            login.verifyLoginPageElemenets();
        })
    );

    qase(
        15,
        it('The "Register" page is opened after clicking on the "Register" button in the app navbar', () => {
            cy.clickOnTheRegisterButton();
            cy.verifyURLContains('/register');
            register.verifyRegisterPageElements();
        })
    );

    qase(
        16,
        it('The login container appears in the middle of the page after clicking on the "Login" button from the app navbar', () => {
            cy.clickOnTheLoginButton();
            cy.verifyURLContains('/login');
            cy.verifyContainerIsCentered('.login');
        })
    );

    qase(
        17,
        it('The register tab appears in the middle of the page after clicking on the "Register" tab', () => {
            cy.clickOnTheRegisterButton();
            cy.verifyURLContains('/register');
            cy.verifyContainerIsCentered('.register');
        })
    );

    qase(
        18,
        it('The languages dropdown menu appears after clicking on the "Language" button in the navbar', () => {
            cy.clickOnLanguageDropdown();
            cy.get('div[aria-label="select language"] .dropdown-item').should('have.length', 2);
            cy.get('div[aria-label="select language"] .dropdown-item:nth-child(1)').should('contain', 'English');
            cy.get('div[aria-label="select language"] .dropdown-item:nth-child(2)').should('contain', 'Deutsch');
        })
    );

    qase(
        19,
        it('The "Güdel Website" page is opened after clicking on the "Güdel Website" button in the navbar', () => {
            cy.get(':nth-child(2) > .row > .col-auto > a').should('have.attr', 'href', 'https://www.gudel.com/');
        })
    );

    // qase(20, it('The "Güdel Office365 portal" page is opened after clicking on the "Güdel internal login" button', () => {
    //     cy.clickOnTheLoginButton();
    //     cy.clickOnInternalLoginButton();
    //     cy.url().should('contain','login.microsoftonline.com')
    //     cy.get('img.banner-logo')
    // })
    // );

    qase(
        21,
        it('The "Email Address" and "Password" input fields appear after clicking on the "Login" button from the login container', () => {
            cy.clickOnTheLoginButton();
            cy.clickOnUserLoginButton();
            cy.get('input#email').should('be.visible');
            cy.get('input#password').should('be.visible');
        })
    );

    qase(
        22,
        it('The "Güdel App" logged in successfully after filling the email and the password, then clicking "Sign in" button', () => {
            cy.clickOnTheLoginButton();
            cy.clickOnUserLoginButton();
            cy.login(user.email, user.password);
            cy.clickOnSingInButton();
            cy.verifyURLContains('dev.my.gudel.com');
            cy.get('.cockpit .row .col');
        })
    );

    qase(
        23,
        it('"We cant seem to find your account" user message appears after filling the email and the password with wrong data, then clicking "Sign in" button', () => {
            cy.clickOnTheLoginButton();
            cy.clickOnUserLoginButton();
            cy.login('invalid.email@elunic.net', 'invalidPassword123');
            cy.clickOnSingInButton();
            cy.get('.pageLevel > p').should('have.text', "We can't seem to find your account");
        })
    );

    qase(
        24,
        it('The inputs fields are required in the "Register" container', () => {
            cy.clickOnTheRegisterButton();
            cy.registerButtonIsDisabled();
            register.selectDropdown('Mr.');
            cy.registerButtonIsDisabled();
            register.getFirstNameField().type('Test');
            cy.registerButtonIsDisabled();
            register.getLastNameField().type('Automation');
            cy.registerButtonIsDisabled();
            register.getEmailField().type('123456@elunic.net');
            cy.registerButtonIsDisabled();
            register.getPasswordField().type('AutomationPassword123');
            register.getConfirmPassword().type('AutomationPassword123');
            cy.registerButtonIsDisabled();
            register.getCheckboxTerms().click();
            cy.get('button.btn.btn-primary').should('not.be.disabled');
        })
    );

    qase(
        25,
        it('The tooltip text have a password rules after hovering over the password input field in the "Register" container', () => {
            cy.clickOnTheRegisterButton();
            cy.get('.form-group .bi').trigger('mouseenter');
            cy.get('.tooltip-inner').should('be.visible');
            cy.get('.tooltip-inner').should('have.text', '8-64 characters length. Including lovercase, uppercase and numbers or symbols.');
        })
    );
});
