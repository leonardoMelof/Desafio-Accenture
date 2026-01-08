class PracticeFormPage {

    elements = {
        btnFormularios: () => cy.get('.category-cards > :nth-child(2)'),
        btnPracticeForm: () => cy.get(':nth-child(2) > .element-list > .menu-list > #item-0'),
        campoPrimeiroNome: () => cy.get('#firstName'),
        campoUltimoNome: () => cy.get('#lastName'),
        campoEmail: () => cy.get('#userEmail'),
        campoGeneroOutro: () => cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label'),
        campoTelefone: () => cy.get('#userNumber'),
        campoDataNascimento: () => cy.get('#dateOfBirthInput'),
        campoAssunto: () => cy.get('#subjectsInput'),
        campoHobbies: () => cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label'),
        inputUploadImagem: () => cy.get('#uploadPicture'),
        campoEndereco: () => cy.get('#currentAddress'),
        comboBoxEstado: () => cy.get('#state > .css-yk16xz-control'),
        comboBoxCidade: () => cy.get('#stateCity-wrapper > :nth-child(3)'),
        btnEnviar: () => cy.get('#submit'),
        popupConfirmacao: () => cy.get('#example-modal-sizes-title-lg'),
        btnFecharPopup: () => cy.get('#closeLargeModal'),
        comboBoxMesNascimento: () => cy.get('.react-datepicker__month-select'),
        comboBoxAnoNascimento: () => cy.get('.react-datepicker__year-select'),
    };

    visitarPagina() {
        cy.visit("/");
    }

    clicarFormulario() {
        this.elements.btnFormularios().click();
        this.elements.btnPracticeForm().click();
    }

    preencherTodosCamposObrigatorios(fileName) {
        this.elements.campoPrimeiroNome().type("João");
        this.elements.campoUltimoNome().type("Silva");
        this.elements.campoEmail().type("teste@gmail.com");
        this.elements.campoGeneroOutro().click();
        this.elements.campoTelefone().type("11999999999");
        this.elements.campoDataNascimento().click().type("{selectall}10 Oct 2001{enter}");
        this.elements.campoAssunto().type("Maths{enter}");
        this.elements.campoHobbies().click();
        this.elements.inputUploadImagem().selectFile(`cypress/fixtures/${fileName}`);
        this.elements.campoEndereco().type("Rua Exemplo, 123");
        this.elements.comboBoxEstado().click().type("NCR{enter}");
        this.elements.comboBoxCidade().click().type("Delhi{enter}");
    }   

    enviarFormulario() {
        this.elements.btnEnviar().click();
    }

    validarPopupConfirmacao() {
        this.elements.popupConfirmacao().should('be.visible');
    }

    fecharPopupDeConfirmacao() {
        this.elements.btnFecharPopup().click({ force: true });
    }


} export default new PracticeFormPage();