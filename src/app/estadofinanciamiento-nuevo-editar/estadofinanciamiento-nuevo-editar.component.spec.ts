import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadofinanciamientoNuevoEditarComponent } from './estadofinanciamiento-nuevo-editar.component';

describe('EstadofinanciamientoNuevoEditarComponent', () => {
  let component: EstadofinanciamientoNuevoEditarComponent;
  let fixture: ComponentFixture<EstadofinanciamientoNuevoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadofinanciamientoNuevoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadofinanciamientoNuevoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
