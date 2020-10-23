import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarContraseniaAvisoComponent } from './recordar-contrasenia-aviso.component';

describe('RecordarContraseniaAvisoComponent', () => {
  let component: RecordarContraseniaAvisoComponent;
  let fixture: ComponentFixture<RecordarContraseniaAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordarContraseniaAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarContraseniaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
