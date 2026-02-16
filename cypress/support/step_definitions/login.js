import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../e2e/pages/login_page";

const loginpage = new LoginPage();

Given('I am on the login page', () => {
  loginpage.accessLoginPage();
});

When('I input my username {string} and password {string}', (username, password) => {
  loginpage.fillLoginInfo(username, password);
});

When('I click the login button', () => {
  loginpage.submitButton();
});

Then('I should be logged in', () => {
  // sua validação aqui
});