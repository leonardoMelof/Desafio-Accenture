Feature: BookStore API

Scenario: Fluxo completo de criação de usuário e reserva de livros
    Given que gero dados aleatórios para um novo usuário da API
    When realizo o fluxo de criação e autorização do usuário
    And seleciono dois livros disponíveis na BookStore
    Then alugo os livros com sucesso
    And listo os detalhes do usuário para confirmar a reserva final