import { Given } from "cypress-cucumber-preprocessor/steps";

Given("que acesso a página {string} do DemoQA", () => {
    cy.visit(`/`);
});