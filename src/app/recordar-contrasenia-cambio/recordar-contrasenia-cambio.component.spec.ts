import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarContraseniaCambioComponent } from './recordar-contrasenia-cambio.component';

describe('RecordarContraseniaCambioComponent', () => {
  let component: RecordarContraseniaCambioComponent;
  let fixture: ComponentFixture<RecordarContraseniaCambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordarContraseniaCambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarContraseniaCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
