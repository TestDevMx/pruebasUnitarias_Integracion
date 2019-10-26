import { usuarioIngresado } from './booleaos';
describe('Pruebas de booleanos', ()=> {


    it('Debe de retornar true', ()=> {
        const resp = usuarioIngresado();
        expect(resp).toBeTruthy();
        // expect(resp).not.toBeTruthy();
    });

});