import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import BrowserWindowsPage from "./browserWindowsPage";

When("navego ate o submenu browser windows", () => {
  BrowserWindowsPage.navegarParaSubmenuJanelas();
});

When("clico no botão para abrir uma nova janela", () => {
    BrowserWindowsPage.clicarNovaJanela();  
});             
Then("valido que a nova janela foi aberta com a mensagem \"This is a sample page\"", () => {
    BrowserWindowsPage.validarConteudoNovaJanela();
});
