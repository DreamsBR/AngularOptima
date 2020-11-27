import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoVentaComponent } from './estado-venta.component';

describe('EstadoVentaComponent', () => {
  let component: EstadoVentaComponent;
  let fixture: ComponentFixture<EstadoVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
