import LoginElements from "../elements/login_elements";

const loginElements = new LoginElements();
const url = Cypress.config('baseUrl');

class LoginPage {

    accessLoginPage(){
        cy.visit(url);
    }

    fillLoginInfo(email, password){
        cy.get(loginElements.inputUserName()).type(email);
        cy.get(loginElements.inputPassword()).type(password);
    }

    submitButton(){
        cy.get(loginElements.btnLogin()).click();
    }
}export default LoginPage;