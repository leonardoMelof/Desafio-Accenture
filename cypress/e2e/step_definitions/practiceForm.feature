Feature: Submissao do formulario Practice Form

  Scenario: Preencher e submeter o formulario com sucesso
    Given que acesso a página "automation-practice-form" do DemoQA
    When navego até o formulário Practice Form
    And preencho todos os campos obrigatórios "upload.txt"
    And envio o formulário
    Then devo visualizar o popup de confirmação
    And fecho o popup