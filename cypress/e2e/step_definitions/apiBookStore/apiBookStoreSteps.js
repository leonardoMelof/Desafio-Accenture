import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ApiBookStorePage from "./apiBookStorePage";
import DataHelper from "../../../support/dataHelper";

let userCredentials;
let userId;
let authToken;
let selectedBooks = [];

Given("que gero dados aleatórios para um novo usuário da API", () => {
    const fakeUser = DataHelper.generateUser();
    userCredentials = {
        userName: fakeUser.firstName + fakeUser.lastName,
        password: "User@12345"
    };
});

When("realizo o fluxo de criação e autorização do usuário", () => {
    ApiBookStorePage.criarUsuario(userCredentials).then((res) => {
        expect(res.status).to.eq(201);
        userId = res.body.userID;

        return ApiBookStorePage.gerarToken(userCredentials);
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.status).to.eq("Success");
        authToken = res.body.token;

        return ApiBookStorePage.verificarAutorizacao(userCredentials);
    }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.be.true;
    });
});

And("seleciono dois livros disponíveis na BookStore", () => {
    ApiBookStorePage.obterLivros().then((res) => {
        expect(res.status).to.eq(200);
        selectedBooks = [
            { isbn: res.body.books[0].isbn },
            { isbn: res.body.books[1].isbn }
        ];
    });
});

Then("alugo os livros com sucesso", () => {
    ApiBookStorePage.adicionarLivros(userId, selectedBooks, authToken).then((res) => {
        expect(res.status).to.eq(201);
        cy.log('Livros alugados com sucesso');
    });
});

And("listo os detalhes do usuário para confirmar a reserva final", () => {
    ApiBookStorePage.obterDetalhesUsuario(userId, authToken).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.books).to.have.lengthOf(2); 
        
        const isbnsNoPerfil = res.body.books.map(b => b.isbn);
        expect(isbnsNoPerfil).to.include(selectedBooks[0].isbn);
        expect(isbnsNoPerfil).to.include(selectedBooks[1].isbn);
    });
});