class InteractionsPage {
    elements = {
        btnInteracoes : () => cy.get(':nth-child(5) > :nth-child(1) > .card-up'),
        submenuOrdenavel : () => cy.get(':nth-child(5) > .element-list > .menu-list > #item-0'),
        itensLista: () => cy.get('#demo-tabpane-list .list-group-item'),
        abaLista: () => cy.get('#demo-tab-list')
    }

    navegarParaSubmenuOrdenavel() {
        this.elements.btnInteracoes().scrollIntoView().click();
        this.elements.submenuOrdenavel().scrollIntoView().click();
    }

    moverPorOffset(itemText, yOffset) {
        cy.contains('#demo-tabpane-list .list-group-item', itemText)
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientX: 0, clientY: yOffset, force: true })
          .trigger('mouseup', { force: true });
    }
}
export default new InteractionsPage();