const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './cypress/cucumber-json',
    reportPath: './cypress/reports/cucumber-htmlreport',
    metadata: {
        browser: {
            name: 'chrome',
            version: '119'
        },
        device: 'Local Test Machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Desafio Accenture - DemoQA' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Cycle', value: 'B1' }
        ]
    }
});