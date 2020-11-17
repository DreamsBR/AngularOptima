import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoNuevoEditarComponent } from './periodo-nuevo-editar.component';

describe('PeriodoNuevoEditarComponent', () => {
  let component: PeriodoNuevoEditarComponent;
  let fixture: ComponentFixture<PeriodoNuevoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoNuevoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoNuevoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
