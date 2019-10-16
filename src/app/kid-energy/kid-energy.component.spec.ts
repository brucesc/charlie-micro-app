import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidEnergyComponent } from './kid-energy.component';

describe('KidEnergyComponent', () => {
  let component: KidEnergyComponent;
  let fixture: ComponentFixture<KidEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
