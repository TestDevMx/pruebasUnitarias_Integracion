import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';


import {RouterTestingModule} from '@angular/router/testing'
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { NavbarComponent } from './avanzado/navbar/navbar.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // NavbarComponent
      ],
      imports:[
        RouterTestingModule.withRoutes([])
      ],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas-aut'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pruebas-aut');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to pruebas-aut!');
  // });


  it('Debe de tener un router-outlet', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;

    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();

  });

  // xit('Debe de ener un linj a la página de médicos', () =>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

  //   // console.log(elementos);
  //   let existe = false;

  //   for(const elem of elementos){

  //     if(elem.attributes['routerLink'] === '/medicos'){
  //       existe = true;
  //       break;
  //     }


  //   }

  //   expect(existe).toBeTruthy();

  // });


});
