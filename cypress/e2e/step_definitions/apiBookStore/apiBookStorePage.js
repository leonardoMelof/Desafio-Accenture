class ApiBookStorePage {
    criarUsuario(body) {
        return cy.request({ method: 'POST', url: '/Account/v1/User', body, failOnStatusCode: false });
    }

    gerarToken(body) {
        return cy.request({ method: 'POST', url: '/Account/v1/GenerateToken', body });
    }

    verificarAutorizacao(body) {
        return cy.request({ method: 'POST', url: '/Account/v1/Authorized', body });
    }

    obterLivros() {
        return cy.request('GET', '/BookStore/v1/Books');
    }

    adicionarLivros(userId, isbns, token) {
        return cy.request({
            method: 'POST',
            url: '/BookStore/v1/Books',
            auth: { bearer: token },
            body: { userId, collectionOfIsbns: isbns }
        });
    }

    obterDetalhesUsuario(userId, token) {
        return cy.request({
            method: 'GET',
            url: `/Account/v1/User/${userId}`,
            auth: { bearer: token }
        });
    }
}

export default new ApiBookStorePage();