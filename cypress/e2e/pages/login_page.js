import LoginElements from "../elements/login_elements";

const loginElements = new LoginElements();

class LoginPage {

    accessLoginPage(){
        cy.visit('/');
    }

    fillLoginInfo(username, password){
        cy.get(loginElements.inputUserName()).type(username);
        cy.get(loginElements.inputPassword()).type(password);
    }

    submitButton(){
        cy.get(loginElements.btnLogin()).click();
    }
}export default LoginPage;