 Feature: Login de usuário administrador
    Como um usuário de perfil administrador cadastrado no sistema de gerenciamento de RH
    Desejo entrar na aplicação
    Para fazer uso das funcionalidades a que tenho acesso

Scenario: Autenticação de usuário com sucesso
    Given eu estou na página de login da aplicação
    And eu preencho o meu login de acesso "Admin"
    And eu preencho a minha senha de acesso "admin123"
    When eu solicito acesso ao sistema
    Then eu devo ser autenticado com sucesso

Scenario: Autenticação de usuário com credenciais inválidas
    Given eu estou na página de login da aplicação
    And eu preencho o meu login de acesso "usuario_invalido"
    And eu preencho a minha senha de acesso "senha_invalida"
    When eu solicito acesso ao sistema
    Then a página de autenticação deve exibir a mensagem "Invalid credentials"

