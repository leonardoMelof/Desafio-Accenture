# Desafio Accenture - Automação (DemoQA)

## Visão Geral

Este repositório contém uma suíte de testes automatizados com Cypress e integração Cucumber (Gherkin). Os testes geram artefatos JSON compatíveis com geradores de relatório e um relatório HTML consolidado.

## Pré-requisitos

- Node.js (recomendado LTS) e npm
- Acesso à máquina local para executar o Cypress

## Instalação

1. Abra um terminal na raiz do projeto.
2. Instale dependências:

```bash
npm install
```

## Arquivos e configurações importantes

- `package.json` — scripts e dependências principais ([package.json](package.json)).
- `cucumber-report.js` — gerador do relatório HTML usando `multiple-cucumber-html-reporter` ([cucumber-report.js](cucumber-report.js)).
- Pasta com JSONs do Cucumber: [cypress/cucumber-json](cypress/cucumber-json)
- Pasta do relatório gerado: [cypress/reports/cucumber-htmlreport](cypress/reports/cucumber-htmlreport)
- Steps definitions: `cypress/e2e/step_definitions`

> Observação: a configuração do preprocessor e a geração de arquivos JSON estão definidas em `package.json` na chave `cypress-cucumber-preprocessor`.

## Scripts npm úteis

- Executar todos os testes em modo headless:

```bash
npm run cypress:run
```

- Executar testes (alias):

```bash
npm run test
```

- Executar um spec específico (editar o caminho do arquivo):

```bash
npm run cypress:run:specific
```

- Gerar relatório HTML (a partir dos JSONs em `cypress/cucumber-json`):

```bash
npm run report:generate
```

- Fluxo completo (rodar testes e gerar relatório):

```bash
npm run test:full
```

## Execução - modos principais

- Interativo (GUI):

```bash
npx cypress open
```

- Headless (CI / terminal):

```bash
npm run cypress:run
```

Após execução, os arquivos JSON do Cucumber são gerados em `cypress/cucumber-json` (configurado em `package.json`). O gerador de relatório consome esses JSONs.

## Gerar e visualizar o status-report

1. Rode os testes para gerar os JSONs (ex.: `npm run cypress:run`).
2. Gere o relatório HTML com:

```bash
npm run report:generate
```

3. Abra o arquivo HTML gerado em `cypress/reports/cucumber-htmlreport` no seu navegador (geralmente um `index.html`).

Exemplo de caminhos:

- JSONs: `cypress/cucumber-json/*.cucumber.json` (ex.: [cypress/cucumber-json/apiBookStore.cucumber.json](cypress/cucumber-json/apiBookStore.cucumber.json))
- Relatório HTML: [cypress/reports/cucumber-htmlreport](cypress/reports/cucumber-htmlreport)

## Observações sobre configuração

- O projeto usa `cypress-cucumber-preprocessor` (configurado em `package.json`) com saída para `cypress/cucumber-json`.
- O `cucumber-report.js` usa `multiple-cucumber-html-reporter` e está configurado para ler de `./cypress/cucumber-json` e gravar em `./cypress/reports/cucumber-htmlreport`.

## Dicas e troubleshooting

- Se o relatório não for gerado, verifique se existem arquivos `.cucumber.json` em `cypress/cucumber-json` antes de executar `npm run report:generate`.
- Em caso de erro nas dependências, tente:

```bash
rm -rf node_modules package-lock.json
npm install
```

- Para rodar um único cenário/arquivo: ajuste `--spec` ou filtre no seu runner preferido.

## Contato

Se precisar que eu adicione instruções de CI (GitHub Actions / Azure DevOps), ou exemplo de comando para abrir o relatório automaticamente, posso incluir.
