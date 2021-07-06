
// ? Si quieres un mejor soporte para el autocompletado coloca lo siguiente:

/// <reference types="cypress" />

describe('Carga la página principal', () => {

    // ? En el caso de Cypres, se uiliza unicamente it.
    it('Carga la página principal', () => {

        // ? Primero tenemos que decirle a Cypress a donde se va a conectar, 
        // ? se tiene que conectar a este proyecto que tenemos, Cypress no sabe 
        // ? la existencia de este proyecto.

        // ? Por lo tanto, le vamos a decir a Cypress que lo pirmero que tiene que hacer
        // ?  es abrir una url primero.
        cy.visit('/index.html');

        // ! Cypress va y sivita ese sitio web  después ejecuta esta otra línea.

        // ? Todas las funciones de Cypress inician con cy
        // Para verificar que un elemento del Dom existe
        // ? Le vamos a decir que vamos a revisar por un h1
        // ? con el contenido que le coloquemos.

        // * Verificar que el elemento contenga ese texto
        // cy.contains('h1', 'Administrador de Pacientes de Veterinaria');
        // ! Usando buenas prácticas
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        // ? Ahora buscaremos por un H1 si existe.
        // ? Utiliamos get para obtener elementos de DOM.
        
        // * Verificar que exista
        
        // cy.get('h1').should('exist');
        
        // Ejemplos de buenas prácticas  guia de Cypress: https://docs.cypress.io/guides/references/best-practices
        // Por lo tanto está línea no será una buena práctica en cypress: cy.get('h1').should('exist');
        
        // Lo recomendado es mejor agregar un atributo llamado data-cy="nombre-unico-en-el-proyecto".
        // Entonces en el html debemos de agregar ese atributo al elemento h1 que habíamos declarado arriba.
        cy.get('[data-cy="titulo-proyecto"]').should('exist');
        // Y así se seleccionará el elemento

        // * Verificar que exista el elemento y contenga un texto.
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria')
        
        // De esta forma podemos hacer una prueba y decirle a Cypress que queremos mostrar en pantalla
        // y que es lo que se debe de ver.

        // * Verificar el texto de las citas.
        // ? Funciona con o sin comillas.
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal','No hay Citas, comienza creando una');
        
        // * Verificar que el texto no sea igual al de las citas.
        // ? Funciona con o sin comillas.
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('not.equal','No hay Citas');
    });
});