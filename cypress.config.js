const { defineConfig } = require("cypress");

//Importando o módulo do Cucumber
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    //Configurando a extensão de arquivos .feature
    //Estes arquivos irão implementar os testes com o Cucumber
    specPattern: "**/*.feature",

    setupNodeEvents(on, config) {
     
      //Configurando o preprocessor do Cucumber
      on('file:preprocessor', cucumber());
    },
  },
});