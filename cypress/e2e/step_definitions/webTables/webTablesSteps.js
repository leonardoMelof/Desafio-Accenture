const { When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const WebTablesPage = require("./webTablesPage");
const DataHelper = require("../../../support/dataHelper");

Given("navego ate o submenu web-tables", () => {
  WebTablesPage.navegarParaWebTables();
});

And("eu crio um novo registro", () => {
    const user = DataHelper.generateUser();
    WebTablesPage.preencherForm(user);
});

And("edito esse novo registro", () => {
    const updatedUser = DataHelper.generateUser();
    WebTablesPage.editarForm(updatedUser);  
});

And("deleto esse novo registro", () => {
    WebTablesPage.deletarForm();
    
});     

Then("o registro deve ser deletado com sucesso", () => {
    WebTablesPage.validarDelecao();
});

When("eu crio {int} novos registros de forma dinâmica", (quantidade) => {
    for (let i = 0; i < quantidade; i++) {
        const user = DataHelper.generateUser();
        WebTablesPage.preencherMultiplosForms(user);
    }
});

Then("eu deleto todos os novos registros criados", () => {
    WebTablesPage.deletarTodosRegistros();
});

