Feature: Interactions Sortable

  Scenario: Ordenar lista com drag and drop
    Given que acesso a página "sortable" do DemoQA
    When navego até o submenu Sortable
    And eu ordeno os elementos em ordem crescente
    Then verifico que a lista está ordenada corretamente