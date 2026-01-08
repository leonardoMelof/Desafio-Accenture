class ProgressBarPage {
    elements = {
        btnComponentes: () => cy.get('.category-cards > :nth-child(4)'),
        submenuBarraProgresso: () => cy.get(':nth-child(4) > .element-list > .menu-list > #item-4'),
        botaoIniciarParar: () => cy.get('#startStopButton'),
        barraProgresso: () => cy.get('.progress-bar'),
        botaoResetar: () => cy.get('#resetButton')
    }

    navegarParaSubmenuBarraProgresso() {
        this.elements.btnComponentes().scrollIntoView().click();
        this.elements.submenuBarraProgresso().scrollIntoView().click();
    }

    iniciarProgresso() {
        this.elements.botaoIniciarParar().click();
    }

    pararEmPercentual(target) {const checkValue = () => {
            this.elements.barraProgresso().then(($bar) => {
                const currentVal = parseInt($bar.text());
                
                if (currentVal >= target - 1) {
                    this.elements.botaoIniciarParar().click();
                } else {
                    cy.wait(5).then(checkValue);
                }
            });
        };
        checkValue();
    }
    aguardarAteConcluir() {
        this.elements.barraProgresso().should('have.text', '100%', { timeout: 20000 });
    }

    resetar() {
        this.elements.botaoResetar().click();
    }

    validarBarraZerada() {
        this.elements.botaoIniciarParar().should('have.text', 'Start');
    }
}

export default new ProgressBarPage();