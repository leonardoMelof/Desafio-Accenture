class WebTablesPage {
    elements = {
        btnElementos: () => cy.get('.category-cards > :nth-child(1)'),
        submenuTabelasWeb: () => cy.get(':nth-child(1) > .element-list > .menu-list > #item-3'),
        botaoAdicionar: () => cy.get('#addNewRecordButton'),
        campoPrimeiroNome: () => cy.get('#firstName'),
        campoSobrenome: () => cy.get('#lastName'),
        campoEmail: () => cy.get('#userEmail'),
        campoIdade: () => cy.get('#age'),
        campoSalario: () => cy.get('#salary'),
        campoDepartamento: () => cy.get('#department'),
        botaoSalvar: () => cy.get('#submit'),
        btnDeletar: () => cy.get('#delete-record-4'),
        btnEditar: () => cy.get('#edit-record-4'),
        tableContainer: () => cy.get('.rt-table'),
        rows: () => cy.get('.rt-tr-group'),
        buscar: () => cy.get('#searchBox'),
        comboPaginacao: () => cy.get('select'),
    }

    navegarParaWebTables() {
        this.elements.btnElementos().scrollIntoView().click();
        this.elements.submenuTabelasWeb().click();
    }

    preencherForm(user) {
        this.elements.botaoAdicionar().click();
        this.elements.campoPrimeiroNome().type("João");
        this.elements.campoSobrenome().type(user.lastName);
        this.elements.campoEmail().type(user.email);
        this.elements.campoIdade().type(user.age);
        this.elements.campoSalario().type(user.salary);
        this.elements.campoDepartamento().type(user.department);
        this.elements.botaoSalvar().click();
    }

    preencherMultiplosForms(user) {
        this.elements.comboPaginacao().select('20');
        this.elements.botaoAdicionar().click();
        this.elements.campoPrimeiroNome().type("João");
        this.elements.campoSobrenome().type(user.lastName);
        this.elements.campoEmail().type(user.email);
        this.elements.campoIdade().type(user.age);
        this.elements.campoSalario().type(user.salary);
        this.elements.campoDepartamento().type(user.department);
        this.elements.botaoSalvar().click();
    }

    editarForm(updatedUser) {
        this.elements.buscar().clear().type("João");
        this.elements.tableContainer().scrollTo('right');
        this.elements.btnEditar().should('be.visible').click({ force: true });
        this.elements.campoSobrenome().clear().type(updatedUser.lastName);
        this.elements.campoEmail().clear().type(updatedUser.email);
        this.elements.campoIdade().clear().type(updatedUser.age);
        this.elements.campoSalario().clear().type(updatedUser.salary);
        this.elements.campoDepartamento().clear().type(updatedUser.department);
        this.elements.botaoSalvar().click();
    }

    deletarForm() {
       this.elements.btnDeletar().should('be.visible').click({ force: true });
    }    
    
    validarDelecao() {
        this.elements.buscar().clear().type("João");
        cy.get('.rt-noData').should('contain.text', 'No rows found');

    }
    deletarTodosRegistros() {
       for (let i = 4; i <= 15; i++) { 
        cy.get(`#delete-record-${i}`) 
        .should('exist') 
        .and('be.visible') 
        .click({ force: true }); }
    }
}
module.exports = new WebTablesPage();