import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ProgressBarPage from "./progressBarPage";

When("navego ate o submenu progress bar", () => {
    ProgressBarPage.navegarParaSubmenuBarraProgresso();
});

When("início o progresso da barra", () => {
        ProgressBarPage.iniciarProgresso();
});

When("interrompo o progresso em {int}%", (percentual) => {
        ProgressBarPage.pararEmPercentual(percentual);
});

Then("valido que o valor da barra é menor ou igual a {int}%", (percentual) => {
    ProgressBarPage.elements.barraProgresso().then(($bar) => {
        const value = parseInt($bar.text());
        expect(value).to.be.at.most(percentual);
    });
});

When("retomo o progresso até 100% e reseto", () => {
    ProgressBarPage.iniciarProgresso();
    ProgressBarPage.aguardarAteConcluir();
    ProgressBarPage.resetar();
});

Then("a barra deve voltar ao estado inicial", () => {
    ProgressBarPage.validarBarraZerada();
});