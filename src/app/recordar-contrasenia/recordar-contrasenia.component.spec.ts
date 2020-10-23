import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarContraseniaComponent } from './recordar-contrasenia.component';

describe('RecordarContraseniaComponent', () => {
  let component: RecordarContraseniaComponent;
  let fixture: ComponentFixture<RecordarContraseniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordarContraseniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
