import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PracticeFormPage from "./practiceFormPage";


When("navego até o formulário Practice Form", () => {
  PracticeFormPage.clicarFormulario();
});

When("preencho todos os campos obrigatórios {string}", (nomeArquivo) => {
  PracticeFormPage.preencherTodosCamposObrigatorios(nomeArquivo);
}); 

And("envio o formulário", () => {
  PracticeFormPage.enviarFormulario();
});

Then("devo visualizar o popup de confirmação", () => {
  PracticeFormPage.validarPopupConfirmacao();
});

And("fecho o popup", () => {
  PracticeFormPage.fecharPopupDeConfirmacao();
}); 