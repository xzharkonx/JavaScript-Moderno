
// ? Si quieres un mejor soporte para el autocompletado coloca lo siguiente:

/// <reference types="cypress" />

// ? Para agregar un conjunto de test
describe('Valida el formulario', () => {

    // ? Agregamos un test
    it('Submit al formulario y mostrar la alerta de error', () => {

        // ? Primero tenemos que decirle a Cypress a que proyecto se va a conectar.
        cy.visit('/index.html');

        // * Vamos a validar el formulario
        cy.get('[data-cy="formulario"]')
            .submit() // ! Lo que hará el submit será precionar el botón.

        // ? Ahora vamos a verificar esa alerta que nos da, de que los campos
        // ? son obligatorios.
        // ! Si recuerdas, esa alerta se genera por parte de nuestra Clase UI.js
        // ! Por lo que le agregaremos el atributo de data-cy en ese archivo js
        // ! A ese elemento/nodo que estamos creando

        // * Verificando la alerta hecha en JS
        // Seleccionar la alerta que colocamos en js
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios')
        
        // * Verificando si hay una clase css en un elemento/nodo
        // ? Recuerda que con [data-cy="alerta"] ya seleccionamos elemento.
        // ? Entonces verificaremos que en las clases  de ese lemento exista
        // ? la clase que queremos.
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger')

        // * Verificando la Clase y el texto (todo junto)
        // cy.get('[data-cy="alerta"]')
        //     .should('have.class', 'alert-danger')
        //     .invoke('text')
        //     .should('equal', 'Todos los campos son Obligatorios')
        

    })
})