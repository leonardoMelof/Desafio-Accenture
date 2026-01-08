Feature: Progress Bar

  Scenario: Controlar progresso da barra com interrupção e reset
    Given que acesso a página "progress-bar" do DemoQA
    When navego ate o submenu progress bar
    And início o progresso da barra
    And interrompo o progresso em 25%
    Then valido que o valor da barra é menor ou igual a 25%
    When retomo o progresso até 100% e reseto
    Then a barra deve voltar ao estado inicial