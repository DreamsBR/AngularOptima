import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoventaComponent } from './estadoventa.component';

describe('EstadoventaComponent', () => {
  let component: EstadoventaComponent;
  let fixture: ComponentFixture<EstadoventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
