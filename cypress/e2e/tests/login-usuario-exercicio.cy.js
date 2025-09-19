import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('eu estou na página de login da aplicação', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

And('eu preencho o meu login de acesso {string}', (login) => {
    cy.get('input[name="username"]').type(login);
});

And('eu preencho a minha senha de acesso {string}', (senha) => {
    cy.get('input[name="password"]').type(senha);
});

When('eu solicito acesso ao sistema', () => {
    cy.get('.orangehrm-login-button').click();
});

Then('eu devo ser autenticado com sucesso', () => {
    cy.url().should('include', 'dashboard/index')
    cy.screenshot('Exercício Aula 03 - Autenticação de usuário com sucesso', { overwrite: true });
});

Then('a página de autenticação deve exibir a mensagem {string}', (mensagem_erro) => {
    cy.get('.oxd-alert').should('contain', mensagem_erro)
    cy.screenshot('Exercício Aula 03 - Erro de login - ' + mensagem_erro, { overwrite: true });
});