class BrowserWindowsPage {
    elements = {
        btnJanelas: () => cy.get('.category-cards > :nth-child(3)'),
        submenuJanelas: () => cy.get(':nth-child(3) > .element-list > .menu-list > #item-0'),
        botaoNovaJanela: () => cy.get('#windowButton'),
        tituloExemplo: () => cy.get('#sampleHeading')
    }

    navegarParaSubmenuJanelas() {
        this.elements.btnJanelas().scrollIntoView().click();
        this.elements.submenuJanelas().click();
    }

    clicarNovaJanela() {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        this.elements.botaoNovaJanela().click();
    }

    validarConteudoNovaJanela() {
        cy.visit('/sample');
        this.elements.tituloExemplo().should('have.text', 'This is a sample page');
    }
}

export default new BrowserWindowsPage();