Feature: Browser Windows
  
  Scenario: Validar abertura de nova janela
    Given que acesso a página "browser-windows" do DemoQA
    When navego ate o submenu browser windows
    And clico no botão para abrir uma nova janela
    Then valido que a nova janela foi aberta com a mensagem "This is a sample page"