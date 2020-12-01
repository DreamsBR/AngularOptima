import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoventaNuevoEditarComponent } from './estadoventa-nuevo-editar.component';

describe('EstadoventaNuevoEditarComponent', () => {
  let component: EstadoventaNuevoEditarComponent;
  let fixture: ComponentFixture<EstadoventaNuevoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoventaNuevoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoventaNuevoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
