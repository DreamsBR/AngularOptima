import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosVentasComponent } from './estados-ventas.component';

describe('EstadosVentasComponent', () => {
  let component: EstadosVentasComponent;
  let fixture: ComponentFixture<EstadosVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
