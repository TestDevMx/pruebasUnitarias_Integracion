import { obtenerRobots } from './arreglos';
xdescribe('Debe de regresar 3 objetos', ()=>{

    it('Debe de retornar al menos 3 robots', () =>{
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });


    xit('Debe de existir Megaman y Ultron', () =>{
        const res = obtenerRobots();
        expect(res).toContain('Robocop');
        expect(res).toContain('Ultron');
    });

});