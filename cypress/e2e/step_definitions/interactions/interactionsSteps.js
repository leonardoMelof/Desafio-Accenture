import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import InteractionsPage from "./interactionsPage";

Given("navego até o submenu Sortable", () => {
    InteractionsPage.navegarParaSubmenuOrdenavel();
});

When("eu ordeno os elementos em ordem crescente", () => {
    cy.contains('.list-group-item', 'Six').drag('.list-group-item:nth-child(6)', {
        force: true,
        target: { x: 10, y: 40 }
    });

    cy.wait(500);
});
Then("verifico que a lista está ordenada corretamente", () => {
    const expectedOrder = ["One", "Two", "Three", "Four", "Five", "Six"];
    
    InteractionsPage.elements.itensLista().each(($el, index) => {
        cy.wrap($el).should('have.text', expectedOrder[index]);
    });
});