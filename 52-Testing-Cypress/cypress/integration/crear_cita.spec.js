
// ? Si quieres un mejor soporte para el autocompletado coloca lo siguiente:

/// <reference types="cypress" />

// ? Para agregar un conjunto de test
describe('Llena los campos para una nueva cita y la muestra', () => {

    // ? Agregamos un test
    it('Campos nueva cita', () => {

        // ? Primero tenemos que decirle a Cypress a que proyecto se va a conectar.
        cy.visit('/index.html');

        // * LLenando los campos automáticamente
        // ? Recuerda agregar el atributo data-cy y asignarles un nombre 
        // ? a tus elementos/nodos input, textarea, button, etc...

        cy.get('[data-cy="mascota-input"]')
            .type('Evil'); // Para hacer que Cypres escriba en ese input lo que ponemos aquí.
       
       cy.get('[data-cy="propietario-input"]')
            .type('Luis Eduardo'); // Para hacer que Cypres escriba en ese input lo que ponemos aquí.

       cy.get('[data-cy="telefono-input"]')
            .type('7122334455'); // Para hacer que Cypres escriba en ese input lo que ponemos aquí.

       cy.get('[data-cy="fecha-input"]')
            .type('2021-06-18'); // Para hacer que Cypres escriba en ese input lo que ponemos aquí.

       cy.get('[data-cy="hora-input"]')
            .type('20:02'); // Para hacer que Cypres escriba en ese input lo que ponemos aquí.

       cy.get('[data-cy="sintomas-textarea"]')
            .type('El perro solo duerme'); // Para hacer que Cypres escriba en ese input lo que ponemos aquí.
        
        // * Enviando la información.

        // Seleccionamos el botón con el método submit
        cy.get('[data-cy="submit-cita"]')
            .click();

        // * Verificar el texto de las citas.
        // ? Funciona con o sin comillas.
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal','Administra tus Citas');

        // * Verificando la alerta hecha en JS
        // ? Seleccionar la alerta que colocamos en js
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')

        // * Verificando si hay una clase css en un elemento/nodo
        // ? Recuerda que con [data-cy="alerta"] ya seleccionamos elemento.
        // ? Entonces verificaremos que en las clases  de ese lemento exista
        // ? la clase que queremos.
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')

    });
});

// ### De esta forma ya estamos seguros de que el usuario que está usando
// ### este proyecto va a ver lo que nosotros teníamos en mente y lo que
// ### nosotros queríamos mostrar.
// # Con esto ya tenemos toda la prueba para crear nuevas citas.