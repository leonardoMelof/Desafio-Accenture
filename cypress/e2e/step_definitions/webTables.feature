Feature: Web Tables


  Scenario: Gerenciar registros na tabela
    Given que acesso a página "web-tables" do DemoQA
    When navego ate o submenu web-tables
    And eu crio um novo registro
    And edito esse novo registro
    And deleto esse novo registro
    Then o registro deve ser deletado com sucesso

  @bonus
  Scenario: Criar e deletar múltiplos registros dinamicamente
    Given que acesso a página "web-tables" do DemoQA
    When navego ate o submenu web-tables
    When eu crio 12 novos registros de forma dinâmica
    Then eu deleto todos os novos registros criados