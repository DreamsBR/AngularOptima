import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadofinanciamientoComponent } from './estadofinanciamiento.component';

describe('EstadofinanciamientoComponent', () => {
  let component: EstadofinanciamientoComponent;
  let fixture: ComponentFixture<EstadofinanciamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadofinanciamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadofinanciamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
