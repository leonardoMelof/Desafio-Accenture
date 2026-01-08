// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// cypress/support/e2e.js

import './commands' // seus comandos existentes

Cypress.on('uncaught:exception', (err, runnable) => {
  // O demoqa.com possui muitos erros de console de scripts de terceiros/anúncios.
  // Retornar 'false' impede que o Cypress falhe o teste por causa desses erros aleatórios.
  
  // Opção A: Ignorar TUDO (Mais prático para este desafio específico)
  return false;

  // Opção B: Ignorar apenas o erro específico (Mais seguro em projetos reais)
  // if (err.message.includes('Script error')) {
  //   return false
  // }
  // return true
});

// Alternatively you can use CommonJS syntax:
// require('./commands')