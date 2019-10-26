import { mensaje } from './string';
// agrupar pruebas
// describe('Pruebas de String');
// Ejecutar pruebas
// it('Debe regresar un string');



describe('Pruebas de string', () =>{

    it('Debe de regresar un string',() =>{
        const resp = mensaje('Orlando');
        expect( typeof resp ).toBe('string');
    });


    it('Debe de regresar un saludo con el nombre enviado',() =>{


        const nombre = 'Pedro';
        const resp = mensaje(nombre);


        expect( resp ).toContain(nombre);
    });


});